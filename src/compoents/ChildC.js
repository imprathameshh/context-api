import React from "react";
import { data, data1 } from "../App";
const ChildC = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h2>
                    My name is {name} and gender is {gender}
                  </h2>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
