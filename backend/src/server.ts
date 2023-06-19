import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DataBase from "./config/db";
import RootRoutes from "./routes/index.routes";
import { allowedOrigins } from "./utils/allowedOrigins";

const app = express();
allowedOrigins(app);
app.use(express.json());

// connect to the database
const db = new DataBase(process.env.MONGO_URI, {});
db.connectDB();
// root routes
RootRoutes(app);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
