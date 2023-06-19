import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import { Request, Response, Next } from "express";
import { sendError } from '../utils/sendError';
const protect = asyncHandler(async (req:Request, res:Response, next:Next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decoded.id).select('-password');
      //if user is found, then attach user to req object
      req.user = user;
      next();
    } catch (error) {
      return sendError({
        res,
        status:401,
        message:"Not Authorized | Token Failed",
       
      })
    }
  }
  if (!token) {
    return sendError({
      res,
      status:401,
      message:"Not Authorized | Token Failed",
    })
  }
});
export default protect;
