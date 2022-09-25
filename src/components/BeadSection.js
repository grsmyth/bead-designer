import * as React from "react";
import { useState, useEffect } from "react";
import { BEAD_PATTERNS, INITIAL_SETUP } from "../constants/beads";
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
        const {
          pattern: { repeat, mod },
          zRotation,
        } = BEAD_PATTERNS[beadPattern];
        const rowCalc = Math.floor(i / repeat) % mod;
        console.log(i, rowCalc);

        return (
          <Container
            key={`bead-${i}`}
            flexDirection="row"
            paddingLeft={rowCalc * 10}
          >
            {beadRow.map((bead, j) => {
              let height = bead.height;
              let width = bead.width;
              if (zRotation) {
                height = bead.width;
                width = bead.height;
              }
              return (
                <Bead
                  key={`bead-${i}${j}`}
                  {...bead}
                  height={height}
                  width={width}
                />
              );
            })}
          </Container>
        );
      })}
    </Container>
  );
};

export default BeadSection;
