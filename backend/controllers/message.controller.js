import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import Conversation from "../models/conversation.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { username, messageContent, conv } = req.body;
        const user = await User.findOne({ username })
        if(!user) return res.status(404).json({ error: "No se encontró al usuario que mandó el mensaje" })
            if(messageContent.length == 0) return res.status(400).json({ error: "El mensaje no puede estar vacío" })
        
        const senderID = user._id;

        const newMessage = new Message({
            senderID,
            messageContent,
            read: false,
            time: Date.now()
        })

        await newMessage.save();

        //Añadir el mensaje a esta conversación
        let convMessages = conv.mensajes;
        convMessages.push(newMessage)

        await Conversation.findOne(conv, { messages: convMessages })
       
        return res.status(201).send("OK")        
    } catch (error) {
        return res.status(500).json({ error: "Ocurrió un error al mandar el mensaje: " + error.message })
    }
}

//Mark message as red
export const readMessage = async (req, res) => {
    try {
        const { messageID } = req.body;
        const message = await Message.findById(messageID)
        await Message.updateOne(message, { read: true })

        return res.status(200).send('OK')
    } catch (error) {
        return res.status(500).json({ error: "Error al marcar el mensaje como leído: " + error.message })
    }
}