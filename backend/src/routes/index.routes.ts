import { Request, Response } from "express";
import userRoutes from "./userRoutes";
import dummyRouter from "./dummyRoutes";
import iconRouter from "./getIconRouter";
import uploadRouter from "./uploadRoutes"
import { sendError } from "../utils/sendError";
const rootRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/dummy", dummyRouter);
  app.use("/api", iconRouter);
  app.use("/upload",uploadRouter)
  app.use("*", (req: Request, res: Response) => {
    return sendError({
      res,
      status: 404,
      data: null,
      message: "Request url doesnot exist!",
    });
  });
};

export default rootRoutes;
