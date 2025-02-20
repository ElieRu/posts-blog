import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/app/lib/models";
const mongoose = require('mongoose');

export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('search');
    
    const queryId = requestParams.get('userId')
    const all_posts = await Post.find({})
        .where({
            userId: queryId
        });
    return NextResponse.json(all_posts);
}

export async function POST(request: Request) {
    const post = await request.json();
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

