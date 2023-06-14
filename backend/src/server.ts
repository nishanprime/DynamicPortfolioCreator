import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import DataBase from './config/db';
import userRoutes from './routes/userRoutes';
import dummyRouter from './routes/dummyRoutes';
import iconRouter from './routes/getIconRouter';
import { errorHandler, notFound } from './middleware/errorMiddleware';
const app = express();
app.use(cors());
app.use(express.json());
// connect to the database
const db = new DataBase(process.env.MONGO_URI, {
  ssl: true,
});
db.connectDB();
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
