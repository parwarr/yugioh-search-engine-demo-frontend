/* eslint-disable no-useless-catch */

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const getAllCards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Cards`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCard = async (name: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name?name=${name}`);
    return response;
  } catch (error) {
    throw error;
  }
};
