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


export const fetchPosts = async (userId: String) => {
    try {
        const response = await fetch(`/api/posts?userId=${userId}`, {
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
};



