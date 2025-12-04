import { parseRanges } from "../parser.js";

const rangeValues = parseRanges("day2/input.txt");

let invalidIds = 0;

rangeValues.forEach((value) => {
  const str = value.toString();
  const mid = str.length / 2;

  for (let i = 1; i <= mid; i++) {
    if (str.length % i !== 0) continue;
    let valid = true;
    for (let j = i; j <= str.length - i; j += i) {
      if (parseInt(str.substring(0, i)) !== parseInt(str.substring(j, j + i))) {
        valid = false;
        break;
      }
    }

    if (valid) {
      invalidIds += value;
      break;
    }
  }
});

console.log("Invalid IDs: ", invalidIds);
