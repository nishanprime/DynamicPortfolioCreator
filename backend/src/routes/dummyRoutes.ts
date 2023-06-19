import express, {Request, Response, Next} from 'express';
import protect from '../middleware/authMiddleware';

const router = express.Router();
router.route('/').get(protect, (req:Request, res:Response) => {
  console.log(req.user);
  res.send('hi');
});

export default router;
