import { useState } from "react";
import React from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //night mode toggle button state;
  const [mode, setMode] = useState("light");

  const value = {
    mode,
    setMode,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
