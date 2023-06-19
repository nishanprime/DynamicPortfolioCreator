import mongoose from 'mongoose';
import { IIcon } from '../interfaces/index';

const iconModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: true,
  },
});

const iconModel = mongoose.model<IIcon>('Icons', iconModelSchema);
export default iconModel;
