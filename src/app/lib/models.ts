import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({ 
    name: {
        type: Number,
        required: true
    } 
}, { 
    timestamps: true 
});

const PersonnelSchema = new Schema({ 
    name: String 
}, { 
    timestamps: true 
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
export const Personnel = mongoose.models.Personnel || mongoose.model('Personnel', PersonnelSchema);


