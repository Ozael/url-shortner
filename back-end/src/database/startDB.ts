import mongoose from 'mongoose';
import { MONGO_URL } from './mongo-string-connection';




mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});


export async function startDB(): Promise<void> {
    await mongoose.connect(MONGO_URL);
};


