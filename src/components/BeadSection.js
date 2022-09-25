import * as React from "react";
import { useState, useEffect } from "react";
import { INITIAL_SETUP } from "../constants/beads";
import { useBeadContext } from "../hooks";
import Bead from "./Bead";
import Container from "./container";
export const BeadContext = React.createContext({});

const BeadSection = () => {
  const { beadPattern } = useBeadContext();
  const [beads, setBeads] = useState(INITIAL_SETUP());

  //   useEffect(() => {
  //     const initialBeads = INITIAL_SETUP();

  //     setBeads(beads);
  //   }, []);

  //   const renderBeads = () => {
  //     return
  //   };

  return (
    <Container flexDirection="column">
      {beads.map((beadRow, i) => {
        return (
          <Container key={`bead-${i}`} flexDirection="row">
            {beadRow.map((bead, j) => (
              <Bead key={`bead-${i}${j}`} {...bead} />
            ))}
          </Container>
        );
      })}
    </Container>
  );
};

export default BeadSection;
