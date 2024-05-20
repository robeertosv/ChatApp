import Conversation from '../models/conversation.model.js'
import User from '../models/user.model.js'

export const createConv = async(req, res) => {
    try {
        const { participantes, nombre } = req.body

        const existeLaConv = await Conversation.findOne({ participantes })
        if(existeLaConv) return res.status(400).json({ error: "Ya tienes una conversación con esos partipantes" })

        const newConv = new Conversation({
            participantes,
            nombre
        })

        await newConv.save();

        return res.status(201).send("OK")
    } catch (error) {
        return res.status(500).json({ error: "Error al crear la conversación: " + error.message })
    }
}

export const getConv = async(req, res) => {
    try {
        const {convID} = req.body
        const conv = await Conversation.findOne({convID})
        return res.status(200).json({ conv: conv })
    } catch (error) {
        return res.status(500).json({ error: "Error al recuperar la conversación: " + error.message })
    }
}

export const getAllConvs = async (req, res) => {
    try {
        const {username} = req.body; 
        
        const user = await User.findOne({ username })
        const UID = user._id;
        
        let allConvs = await Conversation.find();
        let convs = []

        allConvs.forEach(conv => {
            conv.participantes.forEach(participante => {
                if(participante == UID) {
                    convs.push(conv);
                }
            })
        })

        if(convs.length == 0) {
            throw "No existen conversaciones en las que participes";
        }

        
        return res.status(200).json({convs: convs})
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener conversaciones: " + error.message })
    }
}

export const updateConv = async(req, res) => {
    try {
        const {participantes, updateParticipantes, nombre} = req.body;

        if(updateParticipantes == null) {
            updateParticipantes = participantes
        }
        await Conversation.updateOne({participantes}, {updateParticipantes, nombre});

        return res.status(200).send("UPDATED")
    } catch (error) {
        return res.status(500).json({ error: "Error al actualizar la conversacion: " + error.message })   
    }
}