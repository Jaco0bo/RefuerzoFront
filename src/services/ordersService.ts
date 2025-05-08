// src/services/ordersService.ts
import axios from 'axios';
import type { FurnitureDTO } from '../types/furniture';
import type { OrderModel } from '../types/order';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
});

// Crear orden
export const createOrder = (order: Omit<OrderModel, 'orderId'>) =>
  api.post<OrderModel>('/orders', order);

// Consultas
export const getOrdersByUser = (userId: string) =>
  api.get<OrderModel[]>(`/orders/user/${userId}`);

export const getOrdersByDate = (date: string) =>
  api.get<OrderModel[]>(`/orders/date/${date}`);

export const getOrdersByType = (type: string) =>
  api.get<OrderModel[]>(`/orders/type/${type}`);
