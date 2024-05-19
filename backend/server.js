import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import convRoutes from './routes/conv.routes.js'
import connectDB from './db/connectMongo.js';
import path from 'path';


dotenv.config();
const __dirname = path.resolve();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/conv', convRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    connectDB();
    console.log(`http://127.0.0.1:${PORT}`)
})