import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import DataBase from './config/db';
import RootRoutes from "./routes/index.routes"
const app = express();
app.use(cors());
app.use(express.json());

// connect to the database
const db = new DataBase(process.env.MONGO_URI, {
  ssl: true,
});

// root routes
RootRoutes(app)

db.connectDB();

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});
