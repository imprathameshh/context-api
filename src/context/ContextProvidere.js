import React, { useState } from "react";
import Usercontext from "./UserContext";
const ContextProvidere = ({ children }) => {
  const heading = "Context-Api Counter";
  const [count, setCount] = useState(0);
  return (
    <div>
      <Usercontext.Provider value={{ heading, count, setCount }}>
        {children}
      </Usercontext.Provider>
    </div>
  );
};

export default ContextProvidere;
