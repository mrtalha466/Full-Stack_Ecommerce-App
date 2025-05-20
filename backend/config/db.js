import mongoose from 'mongoose';
import 'dotenv/config'

const connectDb = async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed", error.message);
    }
}

export default connectDb ;