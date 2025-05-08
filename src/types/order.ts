import type { FurnitureDTO } from '../types/furniture';

export interface OrderModel {
  orderId: string;
  userId: string;
  date: string;         
  furnitures: FurnitureDTO[];
  totalPrice: number;
}