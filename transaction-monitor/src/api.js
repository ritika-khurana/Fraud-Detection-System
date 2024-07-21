import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transactions';

export const getTransactions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTransaction = async (transaction) => {
  const response = await axios.post(API_URL, transaction);
  return response.data;
};
