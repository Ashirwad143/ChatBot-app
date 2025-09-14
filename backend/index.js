import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatBot from "./routes/chatBot.js";
import cors from "cors";

const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 3000
app.use("/api/chatbot",chatBot);      //Define the route for chatbot
//database connection code
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDb")
})
.catch((err)=>{
    console.log("error",err)
})
app.get("/",(req,res)=>{
    res.send("hello ")
})

app.listen(PORT,()=>{
    console.log(`app listening on${PORT}`)
})

