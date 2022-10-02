import * as React from "react";
import { useState, useEffect } from "react";
import { BEAD_PATTERNS, BEAD_SIZES, HEIGHT, WIDTH } from "../constants/beads";
import { useBeadContext } from "../hooks";
import { InitialSetup } from "../utils";
import Bead from "./Bead";
import Container from "./container";
export const BeadContext = React.createContext({});

const BeadSection = ({ division }) => {
  const { divisions, beadSize, beadPattern } = useBeadContext();
  const [beads, setBeads] = useState({});

  const beadRow = ({ row }) => {
    const beadRow = [];

    for (let i = 0; i < WIDTH; i++) {
      beadRow.push(
        <Bead key={`bead-${row}${i}`} row={row} col={i} division={division} />
      );
    }

    return beadRow;
  };

  const createBeadSection = () => {
    const beadSection = [];
    const beadHeight = HEIGHT / divisions;

    const {
      pattern: { repeat, mod },
      xOffset,
    } = BEAD_PATTERNS[beadPattern];

    const { width } = BEAD_SIZES[beadSize];
    const paddingLeft = width * xOffset;

    for (let i = 0; i < beadHeight; i++) {
      const rowCalc = Math.floor(i / repeat) % mod;

      beadSection.push(
        <Container
          key={`beadRow-${i}`}
          flexDirection="row"
          paddingLeft={rowCalc * paddingLeft}
        >
          {beadRow({ row: i })}
        </Container>
      );
    }

    return beadSection;
  };

  return <Container flexDirection="column">{createBeadSection()}</Container>;
};

export default BeadSection;
