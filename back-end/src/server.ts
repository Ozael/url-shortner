import express, { Request, Response } from 'express';
import { startDB } from './database/startDB';

const app = express();

startDB();











app.listen(5000, () => console.log('app running...'));