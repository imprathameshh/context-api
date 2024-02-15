import React, { createContext } from "react";
import ChildA from "./compoents/ChildA";

export const nameData = createContext();
export const genderData = createContext();

function App() {
  //DEFINE VARIABLE
  const name = "Prathu";
  const gender = "Male";

  return (
    <>
      <h1>Context-Api</h1>
      <nameData.Provider value={name}>
        <genderData.Provider value={gender}>
          <ChildA />
        </genderData.Provider>
      </nameData.Provider>
      <p>Note - This is a basic example of context api</p>
    </>
  );
}

export default App;
