import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import dummyRouter from './routes/dummyRoutes.js';
import iconRouter from './routes/getIconRouter.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const __dirname = path.resolve();
console.log(__dirname);
const app = express();
app.use(cors());
app.use(express.json());
await connectDB();
app.use('/api/users', userRoutes);
app.use('/dummy', dummyRouter);
app.use('/api', iconRouter);
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});
