import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import postRouter from './routes/post.routes.js';
import cors from 'cors';

const PORT = process.env.MYSQL_PORT || 8000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/posts", postRouter);
app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}...`)
})