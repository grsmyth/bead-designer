import { BEAD_SIZES, HEIGHT, WIDTH } from "../constants/beads";

export const InitialSetup = (
    beadSize,
    divisions = 1,
    sectionHeight = HEIGHT,
    sectionWidth = WIDTH
  ) => {
    const { height, width } = BEAD_SIZES[beadSize];
    const beads = [];

    const divisionHeight = sectionHeight / divisions;
  
    for (let i = 0; i < divisionHeight; i++) {
      const beadRow = [];
      for (let j = 0; j < sectionWidth; j++) {
        const bead = { colour: "#FFF", height, width, x: j, y: i };
        beadRow.push(bead);
      }
      beads.push(beadRow);
    }
  return beads;
  };
    