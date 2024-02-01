import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, item];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item !== itemToRemove);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotalAmount = (cartProducts) => {
    if(cartProducts){
      let summ = 0;
      for(let product of cartProducts){
        summ = summ + (product.price*product.count);
      }
      setTotalAmount(summ);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount, calculateTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
