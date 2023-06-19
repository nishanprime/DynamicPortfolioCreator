import express from 'express';
import { Request, Response, Next } from "express";
import {
  authUser,
  registerUser,
  updateUser,
  getAllInfo,
  getInfoFromUsername,
} from '../controllers/authUser';
import protect from '../middleware/authMiddleware';
import { uploadFileToBlobStorage } from '../services/uploadService';
const router = express.Router();
router.route('/login').post(authUser);
router.route('/getallinfo').get(protect, getAllInfo);
// get user info from id
router.route('/getuserinfo/:username').get(getInfoFromUsername);
router.route('/register').post(registerUser);
router.route('/update').put(protect, updateUser);

export default router;