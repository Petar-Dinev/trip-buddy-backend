import mongoose from 'mongoose';

export default async function dbConfig(app, DB_CONNECTION_STRING) {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log('Database connected');
    } catch(err) {
        console.error('Database connection error: ', err);
        process.exit(1);
    }
}