import { NextRequest, NextResponse } from "next/server";
import connect_db from "../lib/utils";
import { Post } from "../lib/models";

export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('search')
    await connect_db();
    
    // const queryId = requestParams.get('userId')
    const datas = await Post.find({});
    return NextResponse.json(datas);
} 
