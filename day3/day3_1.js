import { parseInput } from "../parser.js";

const batteries = parseInput("day3/input.txt");

let total = 0;

batteries.forEach((battery) => {
  const parsedIntBattery = battery.split("").map((str) => parseInt(str));

  const maxIndex = parsedIntBattery
    .slice(0, -1)
    .reduce(
      (iMax, currValue, currIndex, arr) =>
        currValue > arr[iMax] ? currIndex : iMax,
      0
    );

  const leftValue = parsedIntBattery[maxIndex];
  const rightValue = Math.max(...parsedIntBattery.slice(maxIndex + 1));

  total += leftValue * 10 + rightValue;
});

console.log("total is: ", total);
