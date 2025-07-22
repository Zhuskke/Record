import express from "express";
import router from "./routers/noteRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"


dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use("/api/notes", router)

app.listen(process.env.PORT, () => {
    console.log("Your port is", process.env.PORT)
})