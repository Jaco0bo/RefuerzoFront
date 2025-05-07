import React, {
    createContext,
    useReducer,
    useContext
  } from 'react';
    import type { ReactNode } from 'react';
  import type { FurnitureDTO } from '../types/furniture';
  
  interface CartContextType {
    items: FurnitureDTO[];
    addItem: (item: FurnitureDTO) => void;
    removeItem: (idx: number) => void;
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined);

  type Action =
    | { type: 'ADD'; payload: FurnitureDTO }
    | { type: 'REMOVE'; payload: number };
  
  function cartReducer(state: FurnitureDTO[], action: Action): FurnitureDTO[] {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
      case 'REMOVE':
        return state.filter((_, i) => i !== action.payload);
      default:
        return state;
    }
  }
  
  // 4) El provider:
  export const CartProvider: React.FC<{ children: ReactNode }> = ({
    children
  }) => {
    const [items, dispatch] = useReducer(cartReducer, []);
    const addItem = (item: FurnitureDTO) =>
      dispatch({ type: 'ADD', payload: item });
    const removeItem = (idx: number) =>
      dispatch({ type: 'REMOVE', payload: idx });
  
    return (
      <CartContext.Provider value={{ items, addItem, removeItem }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  // 5) Hook de conveniencia:
  export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx)
      throw new Error('useCart debe usarse dentro de <CartProvider>');
    return ctx;
  }
  