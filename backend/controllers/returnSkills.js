import iconModel from '../models/iconModel.js';
const getAllIcons = async (req, res) => {
  const icons = await iconModel.find({});

  res.json(icons.sort((a, b) => a.name.localeCompare(b.name)));
};
export default getAllIcons;
