import express from 'express';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();
router.route('/').get(protect, (req, res) => {
  console.log(req.user);
  res.send('hi');
});

export default router;
