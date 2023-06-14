import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import { Request, Response, Next } from "express";
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
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
export default protect;
