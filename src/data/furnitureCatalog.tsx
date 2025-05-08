import type { FurnitureItem, FurnitureCategory } from '../types/furniture';

import clasicChair from '../assets/images/classic-chair.jpg';
import modernChair from '../assets/images/modern-chair.jpg';
import rusticChair from '../assets/images/rustic-chair.jpg';
import industrialChair from '../assets/images/industrial-chair.jpg';
import clasicTable from '../assets/images/classic-table.jpg';
import modernTable from '../assets/images/modern-table.jpg';
import rusticTable from '../assets/images/rustic-table.jpg';
import industrialTable from '../assets/images/industrial-table.jpg';
import clasicSofa from '../assets/images/classic-sofa.jpg';
import modernSofa from '../assets/images/modern-sofa.jpg';
import rusticSofa from '../assets/images/rustic-sofa.jpg';
import industrialSofa from '../assets/images/industrial-sofa.jpg';

const furnitureCatalog: FurnitureCategory[] = [
  {
    style: 'Classic',
    className: 'styleClassic',
    items: [
      { type: 'chair', style: 'Classic', name: 'Classic Chair', description: '…', imageUrl: clasicChair, price: 120.99 },
      { type: 'table', style: 'Classic', name: 'Classic Table', description: '…', imageUrl: clasicTable, price: 119.99 },
      { type: 'sofa',  style: 'Classic', name: 'Classic Sofa',  description: '…', imageUrl: clasicSofa,  price: 319.99 },
    ]
  },
  {
    style: 'Modern',
    className: 'styleModern',
    items: [
      { type: 'chair', style: 'Modern', name: 'Modern Chair', description: '…', imageUrl: modernChair, price: 164.99 },
      { type: 'table', style: 'Modern', name: 'Modern Table', description: '…', imageUrl: modernTable, price: 149.99 },
      { type: 'sofa',  style: 'Modern', name: 'Modern Sofa',  description: '…', imageUrl: modernSofa,  price: 412.99 },
    ]
  },
  {
    style: 'Industrial',
    className: 'styleIndustrial',
    items: [
      { type: 'chair', style: 'Industrial', name: 'Industrial Chair', description: '…', imageUrl: industrialChair, price: 149.99 },
      { type: 'table', style: 'Industrial', name: 'Industrial Table', description: '…', imageUrl: industrialTable, price: 199.99 },
      { type: 'sofa',  style: 'Industrial', name: 'Industrial Sofa',  description: '…', imageUrl: industrialSofa,  price: 319.99 },
    ]
  },
  {
    style: 'rustic',
    className: 'styleRustic',
    items: [
      { type: 'chair', style: 'Rustic', name: 'Rustic Chair', description: '…', imageUrl: rusticChair, price: 114.99 },
      { type: 'table', style: 'Rustic', name: 'Rustic Table', description: '…', imageUrl: rusticTable, price: 104.99 },
      { type: 'sofa',  style: 'Rustic', name: 'Rustic Sofa',  description: '…', imageUrl: rusticSofa,  price: 321.99 },
    ]
  }
];

export default furnitureCatalog;