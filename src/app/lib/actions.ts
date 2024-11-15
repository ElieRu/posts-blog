import { PostForm, FormComment } from "./definitions";

export async function createPost (form: PostForm) {
    const createdPost = await fetch(`/api/posts`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });
    
    return createdPost.json();
}

export async function deletePost (id: String) {
    try {
        const response = await fetch(`/api/posts/${id}`, {
          method: "delete",
        });
        // return response;
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
    try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'put',
          body: JSON.stringify(form)
        })
        return response.json();
    } catch (error) {
        console.log(error);
      }    
}

// Comments actions
export async function createComment(id: String, form: FormComment) {
    const createdComment = await fetch(`/api/posts/${id}`, {
        method: 'post', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });

    return await createdComment.json();    
}

export async function deteleComment(postId: String, id: String) {
    try {
        const commentDeleted = await fetch(`/api/posts/${postId}/${id}`, {
            method: 'delete'
        });

        const comments = await commentDeleted.json();
        return comments;

    } catch (error) {
        console.log(error);        
    }
}



