import express from "express";
import router from "./routers/noteRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors'


dotenv.config()
const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", router)

connectDB().then( () =>{
    app.listen(process.env.PORT, () => {
    console.log("Your port is", process.env.PORT)
})})