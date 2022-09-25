export const BEAD_SIZES = [{ name: "Miyuki Bead", width: 4, height: 2 }];

export const BEAD_PATTERNS = {
  horizontal: {
    name: "Straight Horizontal",
    pattern: {repeat: 1, mod: 1},
    xOffset: 0,
    yOffset: 0,
    zRotation: false,
  },
  vertical: {
    name: "Straight Vertical",
    pattern: {repeat: 1, mod: 1},
    xOffset: 0,
    yOffset: 0,
    zRotation: true,
  },
  brick: { name: "Brick", pattern: {repeat: 1, mod: 2}, xOffset: 0.5, yOffset: 0, zRotation: 0 },
  doubleBrick: {
    name: "Double Brick",
    pattern: {repeat: 2, mod: 2},
    xOffset: 0.5,
    yOffset: 0,
    zRotation: false,
  },
};

export const BEAD = {
  colour: "#8633FF",
  width: 20,
  height: 10,
  x: 0,
  y: 0,
};

export const HEIGHT = 100;
export const WIDTH = 50;

export const INITIAL_SETUP = (height = HEIGHT, width = WIDTH) => {
  const beads = [];

  for (let i = 0; i < height; i++) {
    const beadRow = [];
    for (let j = 0; j < width; j++) {
      const bead = { ...BEAD, x: j, y: i };
      beadRow.push(bead);
    }
    beads.push(beadRow);
  }

  return beads;
};
