import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    caption: String,
    selectedFile: String,
    username: String,
    creator: String,
    skills: String,
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;