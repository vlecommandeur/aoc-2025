const { parseInput } = require("../parser");

const directions = parseInput("day1/input.txt");
let zeros = 0;
let position = 50;

directions.forEach((direction) => {
  const sign = direction[0] === "L" ? -1 : 1;
  const rotation = sign * direction.slice(1);
  position += rotation;

  if (position < 0) position = 100 + (position % 100);
  if (position > 99) position = (position - 100) % 100;
  if (position === 0) zeros++;
});

console.log("the password is:", zeros);
