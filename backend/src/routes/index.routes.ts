import {Request,Response} from "express"
const rootRoutes=(app)=>{
    app.use("*", (req:Request,res:Response)=>{
        return sendError({
            res,
            status: 404,
            data: null,
            message: "Request url doesnot exist!",
          });
    })
}