import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addTocart = (product) => {
    
    setCartItems((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCartItem = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addTocart, removeFromCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
