import React from "react";
import { nameData, genderData } from "../App";
const ChildC = () => {
  return (
    <>
      <nameData.Consumer>
        {(name) => {
          return (
            <genderData.Consumer>
              {(gender) => {
                return (
                  <h2>
                    My name is {name} and gender is {gender}
                  </h2>
                );
              }}
            </genderData.Consumer>
          );
        }}
      </nameData.Consumer>
    </>
  );
};

export default ChildC;
