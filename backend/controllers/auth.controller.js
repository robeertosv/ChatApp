import User from "../models/user.model.js"
import bcrypt from 'bcrypt'

export const createAccount = async (req, res) => {
    try {
        const {username, fullname, password, confirmPassword, phone, profilePic} = req.body;

        const existeElUsuario = await User.findOne({ username })

        if(existeElUsuario) return res.status(400).json({ error: "Ya existe ese usuario" })
        
        if(password != confirmPassword || password.length < 8) return res.status(400).json({ error: "La contraseña es muy corta" })

        const salt = await bcrypt.salt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, 
            fullname,
            password: hashedPass,
            phone,
            profilePic
        })

        await newUser.save();

        return res.status(200).send("OK")
    } catch (error) {
        return res.status(500).json({ error: "Error al crear el usuario: " + error.message })
    }
}

export const login = async (req, res) => {
    
}

export const logout = async (req, res) => {

}

export const deleteAccount = async (req, res) => {

}