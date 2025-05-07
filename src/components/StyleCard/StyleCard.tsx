import React from 'react';
import styles from './StyleCard.module.css';

interface Props {
  styleName: string;
  imageUrl: string;
  price: number;
  onAdd: () => void;
}

const StyleCard: React.FC<Props> = ({ styleName, imageUrl, price, onAdd }) => (
  <div className={styles.card}>
    <img
      src={imageUrl}
      alt={`${styleName} furniture`}
      className={styles.image}
    />
    <div className={styles.info}>
      <h2>{styleName}</h2>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  </div>
);

export default StyleCard;