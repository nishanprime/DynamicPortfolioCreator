import express from 'express';
import getAllIcons from '../controllers/returnSkills.js';
const router = express.Router();
router.get('/icons', getAllIcons);
export default router;
