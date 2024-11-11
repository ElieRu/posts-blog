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
    const new_post = {
        name: post.name
    }
    await connect_db();
    await Post.create(new_post);
    const all_posts = await Post.find({});
    
    return new NextResponse(
        JSON.stringify(all_posts), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}

