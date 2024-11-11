import { Form } from "./definitions";

export async function createPost (form: Form) {
    try {
        const createdPost = await fetch(`/api/posts`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        return createdPost.json();
    } catch (error) {
    console.log(error);
    }
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

export async function updatePost(id: String, form: Form) {
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
