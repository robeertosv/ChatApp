import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import generateTokenAndCookie from "../utils/cookieGen.js";
import checkSign from "../utils/checkSign.js";

export const createAccount = async (req, res) => {
    try {
        const { username, fullname, password, confirmPassword, phone, profilePic } = req.body;

        const existeElUsuario = await User.findOne({ username })

        if (existeElUsuario) return res.status(400).json({ error: "Ya existe ese usuario" })

        if (password != confirmPassword || password.length < 8) return res.status(400).json({ error: "La contraseña es muy corta" })

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            fullname,
            password: hashedPass,
            phone,
            profilePic
        })

        await newUser.save();

        return res.status(201).send("Created")
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Error al crear el usuario: " + error.message })

    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existeElUser = await User.findOne({ username });
        if (!existeElUser) return res.status(404).json({ error: "No se encontró al usuario" })

        const user = await User.findOne({ username })

        const correctPass = await bcrypt.compare(password, user?.password || "");

        if (!correctPass) return res.status(403).send({ error: "La contraseña no es correcta" })


        generateTokenAndCookie(user._id, res);
        return res.status(200).send("cookieCreated");


    } catch (error) {
        return res.status(500).json({ error: "Error al hacer el login: " + error.message })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("sessionToken", "", { maxAge: 0 })
        return res.status(200).send("OK")
    } catch (error) {
        return res.status(500).error({ error: "Error al hacer logout: " + error.message })
    }

}

export const deleteAccount = async (req, res) => {
    try {
        const { username } = req.body
        res.cookie("sessionToken", "", { maxAge: 0 }) //Logout
        User.deleteOne({ username }).then(() => {
            return res.status(200).send("USER DELETED")
        })
    } catch (error) {
        return res.status(500).json({ error: "Error al eliminar al usuario: " + error.message })
    }
}

export const validateAuth = async (req, res) => {
    checkSign(req, res)
}