const { parseRanges } = require("../parser");

const rangeValues = parseRanges("day2/input.txt");

const filteredRangeValues = rangeValues.filter(
  (value) => value.toString().length % 2 === 0
);

let invalidIds = 0;
filteredRangeValues.forEach((value) => {
  const str = value.toString();
  const mid = str.length / 2;

  const firstHalfSub = str.substring(0, mid);
  const secondHalfSub = str.substring(mid);

  if (firstHalfSub === secondHalfSub) invalidIds += value;
});

console.log("Invalid IDs: ", invalidIds);
