import React, { createContext, useReducer } from "react";
import IAmHeader from "./IAmHeader.es6";
import IAmBody from "./IAmBody.es6";

export const IAmContext = createContext();

const IAm = () => {
  const nameReducer = (name, action) => {
    switch (action.type) {
      case "save":
        return action.name;
      case "delete":
        return "";
      default:
        return name;
    }
  };
  const hobbyReducer = (hobby, action) => {
    switch (action.type) {
      case "save":
        return action.hobby;
      case "delete":
        return "";
      default:
        return hobby;
    }
  };

  const [name, nameDispatch] = useReducer(nameReducer, "");
  const [hobby, hobbyDispatch] = useReducer(hobbyReducer, "");

  const iAmContext = { name, nameDispatch, hobby, hobbyDispatch };

  return (
    <div>
      <IAmContext.Provider value={iAmContext}>
        <IAmHeader />
        <IAmBody />
      </IAmContext.Provider>
    </div>
  );
};

export default IAm;
