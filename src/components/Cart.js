import React from "react";
import { useCart } from "../context/ContextProvider";

const Cart = () => {
  const cartItem = useCart();
  const total = cartItem.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      <>
        {cartItem &&
          cartItem.items.map((item) => (
            <li>
              {item.name} - {item.price}
            </li>
          ))}
      </>
      <h4>Total : {total}</h4>
    </div>
  );
};

export default Cart;
