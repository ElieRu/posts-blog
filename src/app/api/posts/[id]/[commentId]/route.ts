import { Comment } from "@/app/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return new NextResponse(
        JSON.stringify({})
    );
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { commentId: String }}
) {
    await Comment.findOneAndDelete({
        _id: params.commentId
    });

    const comments = await Comment.find({});
        // .$where({
        //     postId: params.id
        // });

    return new NextResponse(
        JSON.stringify(comments), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
        }
    );    
}