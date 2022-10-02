import * as React from "react";
import { useState } from "react";
export const BeadContext = React.createContext({});

export const BeadContextProvider = ({ children }) => {
  const [beadPattern, setBeadPattern] = useState("horizontal");
  const [beadSize, setBeadSize] = useState("miyuki15");
  const [divisions, setDivisions] = useState(1);
  const [beadScale, setBeadScale] = useState(0.2);

  const updateBeadScale = (up = true) => {
    const stepper = (up ? 1 : -1) * 0.1;
    const step = beadScale + stepper;
    setBeadScale(parseFloat(step.toFixed(1)));
  };

  return (
    <BeadContext.Provider
      value={{
        beadPattern,
        setBeadPattern,
        divisions,
        setDivisions,
        beadSize,
        setBeadSize,
        beadScale,
        updateBeadScale,
      }}
    >
      {children}
    </BeadContext.Provider>
  );
};

export const ColourContext = React.createContext({});

export const ColourContextProvider = ({ children }) => {
  const [colours, setColours] = useState({});
  const [info, updateInfo] = useState([]);
  const [shouldSendInfo, setShouldSendInfo] = useState(false);
  return (
    <ColourContext.Provider
      value={{
        colours,
        setColours,
        info,
        updateInfo,
        shouldSendInfo,
        setShouldSendInfo,
      }}
    >
      {children}
    </ColourContext.Provider>
  );
};
