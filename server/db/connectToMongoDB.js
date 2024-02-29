import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Error connecting to Mongodb",error.message)
        
    }
}

export default connectDB;