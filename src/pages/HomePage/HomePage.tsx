import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import clasicChair from '../../assets/images/classic-chair.jpg';
import modernChair from '../../assets/images/modern-chair.jpg';
import rusticChair from '../../assets/images/rustic-chair.jpg';
import industrialChair from '../../assets/images/industrial-chair.jpg';
import clasicTable from '../../assets/images/classic-table.jpg';
import modernTable from '../../assets/images/modern-table.jpg';
import rusticTable from '../../assets/images/rustic-table.jpg';
import industrialTable from '../../assets/images/industrial-table.jpg';
import clasicSofa from '../../assets/images/classic-sofa.jpg';
import modernSofa from '../../assets/images/modern-sofa.jpg';
import rusticSofa from '../../assets/images/rustic-sofa.jpg';
import industrialSofa from '../../assets/images/industrial-sofa.jpg';


const furnitureCatalog = [
  {
    style: 'Classic',
    className: styles.styleClassic,
    items: [
      {
        name: 'Classic Chair',
        description: 'Elegant design with traditional curves and fine details.',
        imageUrl:clasicChair,
        price: 120.99,
      },
      {
        name: 'Classic Table',
        description: 'Timeless design with ornate legs and polished finishes.',
        imageUrl: clasicTable,
        price: 119.99,
      },
      {
        name: 'Classic Sofa',
        description: 'Sophisticated look with button-tufted cushions and carved legs.',
        imageUrl: clasicSofa,
        price: 319.99,
      },
    ],
  },
  {
    style: 'Modern',
    className: styles.styleModern,
    items: [
      {
        name: 'Modern Chair',
        description: 'Minimalist design with metal and leather',
        imageUrl: modernChair,
        price: 164.99,
      },
      {
        name: 'Modern Table',
        description: 'Sleek lines and minimalist style, often with metal or glass elements.',
        imageUrl: modernTable,
        price: 149.99,
      },
      {
        name: 'Modern Sofa',
        description: 'Clean shapes, neutral colors, and a contemporary feel.',
        imageUrl: modernSofa,
        price: 412.99,
      },
    ],
  },
  {
    style: 'Rustic',
    className: styles.styleRustic,
    items: [
      {
        name: 'Rustic Chair',
        description: 'Made with natural wood, featuring a rough and handcrafted look.',
        imageUrl: rusticChair,
        price: 114.99,
      },
      {
        name: 'Rustic Table',
        description: 'Solid wood with a weathered, natural appearance.',
        imageUrl: rusticTable,
        price: 104.99,
      },
      {
        name: 'Rustic Sofa',
        description: 'Cozy and robust, using earthy tones and natural materials.',
        imageUrl: rusticSofa,
        price: 321.99,
      },
    ],
  },
  {
    style: 'Industrial',
    className: styles.styleIndustrial,
    items: [
      {
        name: 'Industrial Chair',
        description: 'Sturdy metal frame with a raw, utilitarian look and exposed rivets.',
        imageUrl: industrialChair,
        price: 149.99,
      },
      {
        name: 'Industrial Table',
        description: 'Built with reclaimed wood and iron, featuring a rugged, factory-inspired design.',
        imageUrl: industrialTable,
        price: 199.99,
      },
      {
        name: 'Industrial Sofa',
        description: 'Minimal padding with leather or canvas upholstery, supported by a steel or reclaimed wood base',
        imageUrl: industrialSofa,
        price: 319.99,
      },
    ],
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homepageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Furniture Catalog</h1>
        <button className={styles.cartButton} onClick={() => navigate('/order')}>
          Cart 🛒
        </button>
      </header>

      {furnitureCatalog.map((category, idx) => (
        <section key={idx} className={styles.styleSection}>
          <h2 className={`${styles.styleTitle} ${category.className}`}>
            {category.style} Style
          </h2>
          <div className={styles.furnitureRow}>
            {category.items.map((item, i) => (
              <div key={i} className={`${styles.furnitureCard} ${category.className}`}>
                <img src={item.imageUrl} alt={item.name} className={styles.furnitureImg} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className={styles.price}>${item.price}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className={styles.cartButtonBottomContainer}>
        <button className={styles.cartButtonLarge} onClick={() => navigate('/order')}>
          Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default HomePage;
