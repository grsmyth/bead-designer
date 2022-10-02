// export const BEAD_SIZES = [{ name: "Miyuki Bead", width: 4, height: 2 }];
export const BEAD_SIZES = {
  miyuki11: { name: "Miyuki Seed 11/0", width: 20, height: 10 },
  miyuki15: { name: "Miyuki Seed 15/0", width: 15, height: 13 },
  toyo11: { name: "Toyo Seed 15/0", width: 23, height: 17 },
  toyo15: { name: "Toyo Seed 15/0", width: 15, height: 10 },
};

export const BEAD_PATTERNS = {
  horizontal: {
    name: "Straight Horizontal",
    pattern: { repeat: 1, mod: 1 },
    xOffset: 0,
    yOffset: 0,
    zRotation: false,
  },
  vertical: {
    name: "Straight Vertical",
    pattern: { repeat: 1, mod: 1 },
    xOffset: 0,
    yOffset: 0,
    zRotation: true,
  },
  brick: {
    name: "Brick",
    pattern: { repeat: 1, mod: 2 },
    xOffset: 0.5,
    yOffset: 0,
    zRotation: 0,
  },
  doubleBrick: {
    name: "Double Brick",
    pattern: { repeat: 2, mod: 2 },
    xOffset: 0.5,
    yOffset: 0,
    zRotation: false,
  },
};

export const BEAD = {
  colour: "#FFFFFF",
  width: 20,
  height: 10,
  x: 0,
  y: 0,
};

export const HEIGHT = 100;
export const WIDTH = 150;

export const BEAD_PROPERTIES = Object.freeze({
  colour: "colour",
  height: 'height',
  width: 'width',
});
