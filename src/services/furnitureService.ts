// src/services/furnitureService.ts
import axios from 'axios';
import type { FurnitureDTO } from '../types/furniture';

const api = axios.create({
  baseURL:  'http://localhost:8080', // process.env.REACT_APP_API_URL ||
});

export const getFurnitureByStyle = async (
  style: string
): Promise<FurnitureDTO[]> => {
  const resp = await api.get<FurnitureDTO[]>(`/orders/type/${style}`);
  return resp.data;
};