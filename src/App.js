import React, { createContext } from "react";
import ChildA from "./compoents/ChildA";

export const data = createContext();
export const data1 = createContext();

function App() {
  const name = "Prathu";
  const gender = "Male";

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
