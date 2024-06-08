import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your API URL

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/products`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const fetchProductSubmission = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/products`, { url });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};