import React from "react";
import { useCart } from "../context/ContextProvider";

const Item = ({ productName, price }) => {
  const cart = useCart();
  console.log(cart);
  return (
    <>
      <div>
        <h3>{productName}</h3>
        <p>{price}</p>
        <button
          onClick={() =>
            cart.setItems([...cart.items, { name: productName, price: price }])
          }
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Item;
