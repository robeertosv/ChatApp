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
    read: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

const Message = mongoose.model("Message", model);

export default Message;