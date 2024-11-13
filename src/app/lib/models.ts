import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({ 
    title: {
        type: String, 
        required: [true, "{VALUE} is required"]
    },
    content: {
        type: String,
        required: [true, "{VALUE} is required"]
    },
    type: {
        type: String,
        enum: [
            'Programming and Development',
            'Hardware Reviews',
            'Cybersecurity',
            'Technology News and Trends',
            'Artificial Intelligence and Machine Learning'
        ],
        required: [true, "{VALUE} is required"],
        message: "{VALUE} is not supported"
    },
    userId: {
        type: mongoose.Types.ObjectId
    },
}, { 
    timestamps: true 
});

const CommentSchema = new Schema({ 
    id: {
        type: mongoose.Types.ObjectId
      },
      content: {
        type: String,
        required: [true, "{VALUE} is not defined"]
      },
      postId: {
        bsonType: mongoose.Types.ObjectId
      },
      userId: {
        bsonType: mongoose.Types.ObjectId
      },
}, { 
    timestamps: true 
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
export const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);


