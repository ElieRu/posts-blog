
import { NextRequest, NextResponse } from "next/server";
import { Comment, Post } from "../../../lib/models";

export async function GET(
    request: Request,
    { params }: {params: { id: String }}
) {
    try {
        const agg = [
            {
              $lookup: {
                from: 'comments',
                localField: '_id',
                foreignField: 'postId',
                as: 'comments'
              }
            },
            {
                $match: {
                    $expr: {
                        $eq: ["$_id", { $toObjectId: params.id }],
                    }
                }
              }
          ];
    
        const result = await Post.aggregate(agg);

        return NextResponse.json(result);
    } catch (error) {
        return new NextResponse(
            JSON.stringify(error), {
                status: 404
            }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: {params: { id: String }}
) {
    const data = await request.json(); 
    const post = new Post(data);
    const postUpdated = await Post.findById(
        { _id: params.id }
    )
    try {
        await Post.findByIdAndUpdate(
            { _id: params.id },
            post, {
                runValidators: true
            }
        );  
        return Response.json(postUpdated);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: {params: { id: String }}
) {

    const getUserId = request.nextUrl.searchParams;
    const userId = getUserId.get('userId');

    await Post.deleteOne({
        _id: params.id
    });

    await Comment.deleteMany({
        postId: params.id
    })

    const posts = await Post.find({})
        .where('userId', userId);
    return Response.json(posts);
}

// Comment Requests..
export async function POST(
        request: NextRequest,
        { params }: { params: { id: String }}
    ) {
    const comment = await request.json();  
    const getParams = request.nextUrl.searchParams;
    const getUserId = getParams.get('userId');
    const getPicture = getParams.get('picture');
    const form = {
        content: comment,
        postId: params.id,
        userId: getUserId,
        picture: getPicture
    };

    const newComment = new Comment(form);
    
    try {
        await newComment.save();
        const newList = await Comment.find({})
            .where('postId', form.postId);
        return NextResponse.json(newList);
    } catch (error) {
        const comments = await Comment.find({})
            .where('postId', form.postId);

        const response = {
            error,
            comments
        };        
        return NextResponse.json(response);
    }
}



