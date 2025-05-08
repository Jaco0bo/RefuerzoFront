import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import {
  getOrdersByUser,
  getOrdersByDate,
  getOrdersByType,
  createOrder
} from '../../services/ordersService';
import styles from './CartPage.module.css';
import type { FurnitureItem, FurnitureType } from '../../types/furniture';
import furnitureCatalog from '../../data/furnitureCatalog';

export default function CartPage() {
  const { items, addItem, removeItem } = useCart();
  const cartItems = items as FurnitureItem[];

  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [orders, setOrders] = useState<any[]>([]);
  const [status, setStatus] = useState<string>('');
  const [customType, setCustomType] = useState<FurnitureType>('chair');
  const [customStyle, setCustomStyle] = useState<string>('Classic');

  const handleSearch = async () => {
    try {
      let resp;
      if (userId) resp = await getOrdersByUser(userId);
      else if (date) resp = await getOrdersByDate(date);
      else if (typeFilter) resp = await getOrdersByType(typeFilter);
      else resp = await getOrdersByUser('');
      setOrders(resp.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddFullSet = (style: string) => {
    const category = furnitureCatalog.find(
      c => c.style.toLowerCase() === style.toLowerCase()
    );
    if (!category) return;
    category.items.forEach(item => addItem(item));
  };

  const handleAddCustom = () => {
    const category = furnitureCatalog.find(
      c => c.style.toLowerCase() === customStyle.toLowerCase()
    );
    const item = category?.items.find(i => i.type === customType);
    if (item) addItem(item);
    else setStatus(`No item of type found ${customType} (${customStyle})`);
  };

  const handleConfirm = async () => {
    if (!userId || !date || cartItems.length === 0) {
      setStatus('Please fill in your user ID, date, and add at least one item.');
      return;
    }
    const total = cartItems.reduce((sum, i) => sum + (i.price || 0), 0);
    try {
      await createOrder({ userId, date, furnitures: cartItems, totalPrice: total });
      setStatus('Order created successfully!');
    } catch {
      setStatus('Error creating order.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>My Cart and Orders</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="">Filter by type</option>
          <option value="chair">Chair</option>
          <option value="table">Table</option>
          <option value="sofa">Sofá</option>
        </select>
        <button className={styles.btn} onClick={handleSearch}>
          Find Orders
        </button>  
      </div>

      <div className={styles.ordersList}>
        {orders.map(o => (
          <div key={o.orderId} className={styles.orderCard}>
            <strong>Order #{o.orderId}</strong> – User: {o.userId} – Date: {o.date} – Total: ${o.totalPrice?.toFixed(2)}
          </div>
        ))}
      </div>

      <hr />

      <div className={styles.cart}>
        <h2>Current cart</h2>

        <div className={styles.fullSetButtons}>
          {['Classic', 'Modern', 'Rustic', 'Industrial'].map(s => (
            <button key={s} className={styles.btn} onClick={() => handleAddFullSet(s)}>
              Add set {s}
            </button>
          ))}
        </div>

        <div className={styles.customAdd}>
          <h4>Add custom item</h4>
          <select
            value={customType}
            onChange={e => setCustomType(e.target.value as FurnitureType)}
          >
            <option value="chair">Chair</option>
            <option value="table">Table</option>
            <option value="sofa">Sofá</option>
          </select>
          <select
            value={customStyle}
            onChange={e => setCustomStyle(e.target.value)}
          >
            {['Classic', 'Modern', 'Rustic', 'Industrial'].map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
          <button className={styles.btn} onClick={handleAddCustom}>
            Add Item
          </button>  
        </div>

        <ul className={styles.cartItems}>
          {cartItems.map((it, idx) => (
            <li key={idx} className={styles.cartItem}>
              <img
                src={it.imageUrl}
                alt={it.name}
                className={styles.cartItemImage}
              />
              <div>
                <strong>{it.name}</strong><br />
                {it.type} ({it.style}) – ${it.price.toFixed(2)}
              </div>
              <button className={styles.btnDanger} onClick={() => removeItem(idx)}>✕</button>
            </li>
          ))}
        </ul>

        <div className={styles.confirmBox}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <button className={styles.btn} onClick={handleConfirm}>
            Confirm Order
          </button>
        </div>

        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

                              