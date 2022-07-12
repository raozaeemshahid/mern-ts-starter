import mongoose from "mongoose"

export const conncetDB = async () => {   
    try {
        await mongoose.connect(process.env.MONGO_URL || "")
        console.log("Database connected Successfully")
    }
    catch (err) {
        console.log("Couldn't connect to database")
    }
}