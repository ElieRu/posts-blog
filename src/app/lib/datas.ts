export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`/api`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;        
    } catch (error) {
        console.log(error);        
    }    
}


export const fetchPosts = async (userId: string | null | undefined) => {
    try {
        const response = await fetch(`/api/posts?userId=${userId}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        console.log(data);
        
        return data;        
    } catch (error) {
        console.log(error);        
    }    
};



