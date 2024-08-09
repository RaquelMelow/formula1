import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.DB_URI;
        if (!uri) {
            throw new Error('DB_URI is not defined in the environment variables.');
        }

        const conn = await mongoose.connect(uri);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
