// Components/WishlistProvider.jsx
import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prev) =>
      prev.some((i) => i.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeFromWishlist = (item) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
