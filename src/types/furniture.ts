export type FurnitureType = 'chair' | 'table' | 'sofa';

export interface FurnitureDTO {
  type: FurnitureType;
  style: string;
  description: string;
  price: number;
}

export interface FurnitureItem extends FurnitureDTO {
  name: string;
  imageUrl: string;
}

export interface FurnitureCategory {
  style: string;
  className: string;
  items: FurnitureItem[];
}