import { parseInput } from "../parser.js";

const diagram = parseInput("day4/input.txt");

let res = 0;
const rollOfPaperChar = "@";

diagram.forEach((row, rowIndex) => {
  [...row].forEach((char, columnIndex) => {
    if (char !== rollOfPaperChar) return;
    let rollOfPaperCount = 0;

    if (diagram[rowIndex - 1]) {
      if (diagram[rowIndex - 1][columnIndex - 1] === rollOfPaperChar)
        rollOfPaperCount++;
      if (diagram[rowIndex - 1][columnIndex] === rollOfPaperChar)
        rollOfPaperCount++;
      if (diagram[rowIndex - 1][columnIndex + 1] === rollOfPaperChar)
        rollOfPaperCount++;
    }

    if (diagram[rowIndex]) {
      if (diagram[rowIndex][columnIndex + 1] === rollOfPaperChar)
        rollOfPaperCount++;
      if (diagram[rowIndex][columnIndex - 1] === rollOfPaperChar)
        rollOfPaperCount++;
    }

    if (diagram[rowIndex + 1]) {
      if (diagram[rowIndex + 1][columnIndex + 1] === rollOfPaperChar)
        rollOfPaperCount++;
      if (diagram[rowIndex + 1][columnIndex] === rollOfPaperChar)
        rollOfPaperCount++;
      if (diagram[rowIndex + 1][columnIndex - 1] === rollOfPaperChar)
        rollOfPaperCount++;
    }

    if (rollOfPaperCount < 4) res++;
  });
});

console.log("res: ", res);
