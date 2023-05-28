import axios from 'axios';

// get all icons
export const getAllIcons = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/icons`);
    console.log("Printing icons", response.data)
    return response.data;
  } catch (error) {
    return error;
  }
};
