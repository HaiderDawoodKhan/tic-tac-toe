import mongoose from "mongoose";

export const connect = async () => {
    try{
        console.log("Connecting to database...")
        const data = await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to database")
    }
    catch (err){
        console.log("Error connecting to database")
    }
}