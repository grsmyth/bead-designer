import { BeadContext, ColourContext } from "../context";

import { useContext } from "react";

export const useBeadContext = () => useContext(BeadContext);

export const useColourContext = () => useContext(ColourContext);
