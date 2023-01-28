import axios from 'axios';

export const getContacts = async () => {
  try {
    const response = await axios.get('https://burger-api-xcwp.onrender.com/contact');
    return response.data;
  } catch (error) {
    console.error(error);
  } 
};

export const getOrders = async () => {
  try {
    const response = await axios.get('https://burger-api-xcwp.onrender.com/orders');
    return response.data;
  } catch (error) {
    console.error(error);
  } 
};

export const getIngredients = async () => {
  try {
    const response = await axios.get('https://burger-api-xcwp.onrender.com/ingredients');
    return response.data;
  } catch (error) {
    console.error(error);
  } 
};