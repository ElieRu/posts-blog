import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import connect_db from "@/app/lib/utils";
import { Post } from "@/app/lib/models";


export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('search')

    await connect_db();
    const all_posts = await Post.find({});
    return NextResponse.json(all_posts);
}

export async function POST(request: Request) {
    const post = await request.json();
    // post.userId = 'done';
    const createdPost = new Post(post);
    // Must add the userId* attribute...

    try {
        await createdPost.save();
        const posts = await Post.find({})
            // .where({
            //     userId: post.userId
            // });
        return new NextResponse(
            JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
        });
    } catch (error) {      
        return new NextResponse(
            JSON.stringify(error),
            {
                status: 201
            }
        );
    }

}

