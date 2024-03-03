import express from 'express';
import cookieParser from 'cookie-parser';
import {app, server} from './socket/socket.js'


import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectDB from './db/connectToMongoDB.js'


const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,()=>{
    connectDB()
    console.log(`running on server! ${PORT}`)
})