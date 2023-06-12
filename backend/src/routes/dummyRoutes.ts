import express from 'express';
import protect from '../middleware/authMiddleware';
const router = express.Router();
router.route('/').get(protect, (req, res) => {
  console.log(req.user);
  res.send('hi');
});

export default router;
