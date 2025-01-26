import mongoose from "mongoose";

// This file is done for reuseable functions...
export default async function connect_db() {
    try {
        // const connexion = process.env.MONGO_URL;
        await mongoose.connect("mongodb://localhost:27017/my-blog");
    } catch (error) {
        console.log(error);        
    }
}




