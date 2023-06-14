import express from 'express';
import { Request, Response, Next } from "express";
import {
  authUser,
  registerUser,
  updateUser,
  getAllInfo,
  getInfoFromUsername,
  upload,
  getFileStream,
} from '../controllers/authUser';
import protect from '../middleware/authMiddleware';
const router = express.Router();
router.route('/login').post(authUser);
router.route('/getallinfo').get(protect, getAllInfo);
// get user info from id
router.route('/getuserinfo/:username').get(getInfoFromUsername);
router.route('/register').post(registerUser);
router.route('/update').put(protect, updateUser);
router
  .route('/upload/:type')
  .post(protect, upload.single('upload'), (req:Request, res:Response) => {
    const key = req.file.key;
    const fullImageUrl =
      `${process.env.BACKEND_URI}/api/users/files/` + key;
    res.send(fullImageUrl);
  });

router.route('/files/:username/:type/:key').get((req:Request, res:Response) => {
  try {
    const key = req.params.key;
    const username = req.params.username;

    const type = req.params.type;
    if (type == 'resume' || type == 'profile') {
      const readStream = getFileStream(`${username}/${type}/${key}`);
      readStream.pipe(res);
      return;
    }
    res.status(400).send('Invalid type or file not uploaded');
  } catch (error) {
    res
      .status(500)
      .send(
        'Something went wrong. Please try again later or contact the admin.'
      );
  }
});
export default router;
