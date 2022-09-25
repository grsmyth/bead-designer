export const BEAD_SIZES = [{ name: "Miyuki Bead", length: 4, width: 2 }];

export const BEAD_PATTERNS = {
  horizontal: {
    name: "Straight Horizontal",
    pattern: 1,
    xOffset: 0,
    yOffset: 0,
    zRotation: 0,
  },
  vertical: {
    name: "Straight Vertical",
    pattern: 1,
    xOffset: 0,
    yOffset: 0,
    zRotation: 90,
  },
  brick: { name: "Brick", pattern: 2, xOffset: 0.5, yOffset: 0, zRotation: 0 },
  doubleBrick: {
    name: "Double Brick",
    pattern: 3,
    xOffset: 0.5,
    yOffset: 0,
    zRotation: 0,
  },
};

export const BEAD = {
  colour: "#8633FF",
  length: 4,
  width: 2,
  x: 0,
  y: 0,
};

export const HEIGHT = 2000;
export const WIDTH = 500;

export const INITIAL_SETUP = (height = HEIGHT, width = WIDTH) => {
  const beads = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const bead = { ...BEAD, x: j, y: i };
      beads.push(bead);
    }
  }
};
