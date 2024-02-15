import React, { useContext } from "react";
import Usercontext from "../context/UserContext";

const Counter = () => {
  const { heading } = useContext(Usercontext);
  const { count, setCount } = useContext(Usercontext);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1> {heading}</h1>
      <h2>Count : {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
