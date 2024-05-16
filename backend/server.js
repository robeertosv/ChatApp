import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js'
import connectDB from './db/connectMongo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send("Página principal")
})

app.listen(PORT, () => {
    connectDB();
    console.log(`http://127.0.0.1:${PORT}`)
})