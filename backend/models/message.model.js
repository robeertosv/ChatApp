import mongoose from "mongoose";

const model = new mongoose.Schema({
    senderID: {
        type: String,
        required: true
    },
    messageContent: {
        type: String,
        required: true
    },
    red: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        default: Date.now(),
        required: true
    }
})