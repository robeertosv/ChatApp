import mongoose from "mongoose";

const model = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    profilePic: {
        type: String,
        required: false
    }
})

const User = mongoose.model("User", model)

export default User;