/* eslint-disable no-useless-catch */

const API_BASE_URL = 'http://localhost:4000';

export const getAllCards = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Cards`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getCard = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/card/${id}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    throw error;
  }
};
