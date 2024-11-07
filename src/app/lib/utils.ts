import mongoose from "mongoose";

export default async function connect_db() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log(error);        
    }
}




