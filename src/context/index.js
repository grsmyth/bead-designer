import * as React from "react";
import { useState } from "react";
export const BeadContext = React.createContext({});

export const BeadContextProvider = ({ children }) => {
  const [beadPattern, setBeadPattern] = useState("horizontal");
  const [divisions, setDivisions] = useState(1);

  return (
    <BeadContext.Provider
      value={{
        beadPattern,
        setBeadPattern,
        divisions,
        setDivisions,
      }}
    >
      {children}
    </BeadContext.Provider>
  );
};

export const ColourContext = React.createContext({});

export const ColourContextProvider = ({ children }) => {
  const [colours, setColours] = useState({});
  return (
    <ColourContext.Provider value={{ colours, setColours }}>
      {children}
    </ColourContext.Provider>
  );
};
