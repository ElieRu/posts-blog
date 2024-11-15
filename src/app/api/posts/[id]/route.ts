
import { NextRequest, NextResponse } from "next/server";
import { Comment, Post } from "../../../lib/models";

export async function GET(
    request: Request,
    { params }: {params: { id: String }}
) {
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
}

export async function PUT(
    request: Request,
    { params }: {params: { id: String }}
) {
    const { name } = await request.json();    
    
    await Post.findByIdAndUpdate(
        { _id: params.id },
        { name: name }
    );

    const post_updated = await Post.findById(
        { _id: params.id }
    )   

    return Response.json(post_updated);
}

export async function DELETE(
    request: Request,
    { params }: {params: { id: String }}
) {
    await Post.deleteOne({
        _id: params.id
    })

    return Response.redirect('/posts');
}

// Comment Requests..
export async function POST(
        request: Request,
        { params }: { params: { id: String }}
    ) {
    const comment = await request.json();  
    comment.postId = params.id;
    const newComment = new Comment(comment);

    try {
        await newComment.save();
        return new NextResponse(
            JSON.stringify(newComment), {
            headers: {
                "Content-Type": "application/json",
                message: "Comment was added"
            },
            status: 201
        });
    } catch (error) {
        return NextResponse.json(error);
    }
}



