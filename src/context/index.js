import * as React from "react";
import { useState } from "react";
export const BeadContext = React.createContext({});

export const BeadContextProvider = ({ children }) => {
  const [beads, setBeads] = useState({});
  const [beadPattern, setBeadPattern] = useState("horizontal");

  return (
    <BeadContext.Provider
      value={{ beads, setBeads, beadPattern, setBeadPattern }}
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
