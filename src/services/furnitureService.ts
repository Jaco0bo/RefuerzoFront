// src/services/furnitureService.ts
import axios from 'axios';
import { FurnitureDTO } from '../types/furniture';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
});

export const getFurnitureByStyle = async (
  style: string
): Promise<FurnitureDTO[]> => {
  const resp = await api.get<FurnitureDTO[]>(`/orders/type/${style}`);
  return resp.data;
};