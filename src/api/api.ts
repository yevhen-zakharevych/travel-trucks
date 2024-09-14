import axios from 'axios';
import { Camper } from '../types';

const baseUrl = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async (): Promise<{
  total: number;
  items: Camper[];
}> => {
  const response = await axios.get(`${baseUrl}/campers`);

  return response.data;
};

export const getCampersDetails = async (id: string) => {
  const response = await axios.get(`${baseUrl}/campers/${id}`);

  return response.data;
};
