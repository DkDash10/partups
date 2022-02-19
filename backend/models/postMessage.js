import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    caption: String,
    selectedFile: String,
    skills: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    dislikeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;