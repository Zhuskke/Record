import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Failed to connect DB", error)
    }
}