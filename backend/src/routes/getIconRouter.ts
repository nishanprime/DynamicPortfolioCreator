import express from 'express';
import getAllIcons from '../controllers/returnSkills';
const router = express.Router();
router.get('/icons', getAllIcons);
export default router;
