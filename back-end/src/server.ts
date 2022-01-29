import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { MONGO_URL } from './database/database';

const app = express();

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});


async function startDB(): Promise<void> {
    await mongoose.connect(MONGO_URL);
};











app.listen(5000, () => console.log('app running...'));