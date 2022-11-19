import axios from 'axios';

// get all icons
export const getAllIcons = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URI}/icons`);
    return response.data;
  } catch (error) {
    return error;
  }
};
