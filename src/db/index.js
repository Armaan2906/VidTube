import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//db is another continent always use async await and try catch

const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

       console.log(`\n MongoDB connected ~  DB host : ${connectionInstance.connection.host}`)
    }catch(error) {
        console.log("MongoDB Conection error" ,error)
        process.exit(1)
    }
}

export default connectDB