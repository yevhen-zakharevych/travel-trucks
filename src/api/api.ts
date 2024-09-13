import axios from 'axios';

const baseUrl = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async () => {
  const response = await axios.get(`${baseUrl}/campers`);

  return response.data;
};

export const getCampersDetails = async (id: string) => {
  const response = await axios.get(`${baseUrl}/campers/${id}`);

  return response.data;
};
