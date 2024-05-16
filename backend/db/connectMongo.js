import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log("Conectado a la DB!")
    } catch (error) {
        console.error("Error al conectar con la DB: " + error.message)   
    }
}

export default connectDB;