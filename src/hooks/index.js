import {
  BeadContextProvider,
  BeadContext,
  ColourContextProvider,
  ColourContext,
} from "../context";

export const useBeadContext = () => BeadContextProvider(BeadContext);

export const useColourContext = () => ColourContextProvider(ColourContext);
