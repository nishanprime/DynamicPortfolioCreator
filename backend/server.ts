import dotenv from "dotenv";
dotenv.config({
  path: `${__dirname}/.env`,
});
console.log(__dirname)
import express from "express";
import cors from "cors";
import DataBase from "./src/config/db";
import RootRoutes from "./src/routes/index.routes";

const app = express();
const allowedOrigins = ["https://dynamicportfolio.io"];
app.use(
  cors({
    origin: "https://dynamicportfolio.io",
    credentials: true,
  })
);
app.use(express.json());

// connect to the database
const db = new DataBase(process.env.MONGO_URI, {});
db.connectDB();
// root routes
RootRoutes(app);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
