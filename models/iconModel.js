import mongoose from 'mongoose';

const iconModelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: true,
  },
});

const iconModel = mongoose.model('Icons', iconModelSchema);
export default iconModel;
