import React,{createContext, useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addTocart = (item) => {
    setCartItem((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItem, addTocart }}>
      {children}
    </CartContext.Provider>
  );
}   