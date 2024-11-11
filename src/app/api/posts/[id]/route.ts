
import { NextResponse } from "next/server";
import { Post } from "../../../lib/models";

export async function GET(
    request: Request,
    { params }: {params: { id: String }}
) {
    const post = await Post.findById({}).where(
        {_id: params.id}
    );
    return NextResponse.json(post);
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

