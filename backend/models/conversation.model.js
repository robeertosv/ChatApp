import mongoose from "mongoose";

const model = new mongoose.Schema({
    participantes: {
        type: Array, //Array con los userID de los partipantes
        required: true
    },
    mensajes: {
        type: Array, //Array con los messageID
        required: false
    },
    nombre: {
        type: String, //Nombre del chat
        required: false
    }
})

const Conversation = new mongoose.model("Conversation", model)

export default Conversation;