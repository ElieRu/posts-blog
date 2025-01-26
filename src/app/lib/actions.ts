import { useUser } from "@auth0/nextjs-auth0/client";
import { PostForm, FormComment } from "./definitions";
import { NextResponse } from "next/server";

export async function createPost (form: PostForm) {
    
    const createdPost = await fetch(`/api/posts`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    
    return createdPost.json();
}

export async function deletePost (
    id: string, userId: string | null | undefined
) {
    try {
        const response = await fetch(`/api/posts/${id}?userId=${userId}`, {
          method: "delete",
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getPost(id: String) {
    try {
        const response = await fetch(`/api/posts/${id}`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updatePost(id: String, form: PostForm) {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
        body: JSON.stringify(form)
    });
    return await response.json();
}

// Comments actions
export async function createComment(
    id: String, 
    form: FormComment, 
    userId: string | null | undefined, 
    picture: String | null | undefined
) {
    try {
        const createdComment = await fetch(`/api/posts/${id}?userId=${userId}&picture=${picture}`, {
            method: 'post', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });    
        const response = await createdComment.json();
        return response;
    } catch (error) {
        console.log(error);  
    }
}

export async function deteleComment(postId: String, id: String) {
    try {
        const commentDeleted = await fetch(`/api/posts/${postId}/${id}`, {
            method: 'delete'
        });

        const response = await commentDeleted.json();
        return response;

    } catch (error) {
        console.log(error);        
    }
}



