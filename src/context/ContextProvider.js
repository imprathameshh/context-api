import React, { useState, createContext, useContext } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <CartContext.Provider value={{ items, setItems }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default ContextProvider;
