const { parseInput } = require("../parser");

const directions = parseInput("day1/input.txt");
let zeros = 0;
let position = 50;

directions.forEach((direction) => {
  const sign = direction[0] === "L" ? -1 : 1;
  const rotation = sign * parseInt(direction.slice(1));
  const oldPos = position;
  position += rotation;

  if (rotation > 0) {
    zeros += Math.floor(position / 100) - Math.floor(oldPos / 100);
  } else {
    zeros += Math.floor((oldPos - 1) / 100) - Math.floor((position - 1) / 100);
  }

  position = ((position % 100) + 100) % 100;
});

console.log("the password is:", zeros);
