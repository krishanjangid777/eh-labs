import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    event: {
        type: Boolean,
        required: true
    },
    webinar: {
        type: Boolean,
        required: true
    },
}, {timestamps: true})

export const Post = new mongoose.model("Post", postSchema)