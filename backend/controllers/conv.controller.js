import Conversation from '../models/conversation.model.js'

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
        
    } catch (error) {
        
    }
}

export const deleteConv = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const updateConv = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}