import express from 'express';
import uploadFile from '../controllers/uploadFile';
import multer from "multer"
import protect from '../middleware/authMiddleware';
const upload=multer({
    dest:"temp/"
})
const router = express.Router();
router.post('/', protect, upload.single('file'), uploadFile);
export default router;
