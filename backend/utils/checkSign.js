import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const checkSign = async (req, res) => {
	try {
		const token = req.cookies.sessionToken

		if (!token) return res.status(400).json({ error: "No se ha encontrado un token" });
		        
		const decoded = jwt.verify(token, process.env.API_KEY);

		if (!decoded) return res.status(401).json({ error: "El token es incorrecto" });

		const user = await User.findById(decoded.userId).select("-password"); //El User sin incluir la contraseña

		if (!user) return res.status(404).json({ error: "No se ha encontrado un usuario" });

		req.user = user;

        return res.send(user)

	} catch (error) {
		res.status(500).json({ error: "Error al comprobar firma" + error.message });
	}
};

export default checkSign;