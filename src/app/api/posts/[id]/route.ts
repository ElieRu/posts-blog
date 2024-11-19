
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
    const data = await request.json();    
    await Post.findByIdAndUpdate(
        { _id: params.id },
        { 
            title: data.title,
            content: data.content,
            type: data.type
        }
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

    const posts = await Post.find({});
    return Response.json(posts);
}

// Comment Requests..
export async function POST(
        request: Request,
        { params }: { params: { id: String }}
    ) {
    const comment = await request.json();  
    const form = {
        content: comment,
        postId: params.id
    };

    const newComment = new Comment(form);
    
    try {
        await newComment.save();
        const newList = await Comment.find({})
            .where('postId', form.postId);
        return NextResponse.json(newList);
    } catch (error) {
        return NextResponse.json(error);
    }
}



