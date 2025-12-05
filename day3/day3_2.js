import { parseInput } from "../parser.js";

const getNMaxIndex = (sliceStart, sliceEnd, parsedIntBattery) => {
  const sliced = parsedIntBattery.slice(sliceStart, sliceEnd);
  if (sliced.length === 0) return 0;
  const localMaxIndex = sliced.reduce(
    (iMax, currValue, currIndex, arr) =>
      currValue > arr[iMax] ? currIndex : iMax,
    0
  );
  return localMaxIndex;
};

const batteries = parseInput("day3/input.txt");

let total = 0;

batteries.forEach((battery) => {
  const parsedIntBattery = battery.split("").map((str) => parseInt(str));

  const firstMaxIndex = getNMaxIndex(0, -11, parsedIntBattery);

  const slice2 = parsedIntBattery.slice(firstMaxIndex + 1, -10);
  const secondMaxLocalIndex = getNMaxIndex(0, slice2.length, slice2);
  const secondMaxGlobalIndex = firstMaxIndex + 1 + secondMaxLocalIndex;

  const slice3 = parsedIntBattery.slice(secondMaxGlobalIndex + 1, -9);
  const thirdMaxLocalIndex = getNMaxIndex(0, slice3.length, slice3);
  const thirdMaxGlobalIndex = secondMaxGlobalIndex + 1 + thirdMaxLocalIndex;

  const slice4 = parsedIntBattery.slice(thirdMaxGlobalIndex + 1, -8);
  const fourthMaxLocalIndex = getNMaxIndex(0, slice4.length, slice4);
  const fourthMaxGlobalIndex = thirdMaxGlobalIndex + 1 + fourthMaxLocalIndex;

  const slice5 = parsedIntBattery.slice(fourthMaxGlobalIndex + 1, -7);
  const fifthMaxLocalIndex = getNMaxIndex(0, slice5.length, slice5);
  const fifthMaxGlobalIndex = fourthMaxGlobalIndex + 1 + fifthMaxLocalIndex;

  const slice6 = parsedIntBattery.slice(fifthMaxGlobalIndex + 1, -6);
  const sixthMaxLocalIndex = getNMaxIndex(0, slice6.length, slice6);
  const sixthMaxGlobalIndex = fifthMaxGlobalIndex + 1 + sixthMaxLocalIndex;

  const slice7 = parsedIntBattery.slice(sixthMaxGlobalIndex + 1, -5);
  const seventhMaxLocalIndex = getNMaxIndex(0, slice7.length, slice7);
  const seventhMaxGlobalIndex = sixthMaxGlobalIndex + 1 + seventhMaxLocalIndex;

  const slice8 = parsedIntBattery.slice(seventhMaxGlobalIndex + 1, -4);
  const eighthMaxLocalIndex = getNMaxIndex(0, slice8.length, slice8);
  const eighthMaxGlobalIndex = seventhMaxGlobalIndex + 1 + eighthMaxLocalIndex;

  const slice9 = parsedIntBattery.slice(eighthMaxGlobalIndex + 1, -3);
  const ninethMaxLocalIndex = getNMaxIndex(0, slice9.length, slice9);
  const ninethMaxGlobalIndex = eighthMaxGlobalIndex + 1 + ninethMaxLocalIndex;

  const slice10 = parsedIntBattery.slice(ninethMaxGlobalIndex + 1, -2);
  const tenthMaxLocalIndex = getNMaxIndex(0, slice10.length, slice10);
  const tenthMaxGlobalIndex = ninethMaxGlobalIndex + 1 + tenthMaxLocalIndex;

  const slice11 = parsedIntBattery.slice(tenthMaxGlobalIndex + 1, -1);
  const eleventhMaxLocalIndex = getNMaxIndex(0, slice11.length, slice11);
  const eleventhMaxGlobalIndex =
    tenthMaxGlobalIndex + 1 + eleventhMaxLocalIndex;

  const slice12 = parsedIntBattery.slice(eleventhMaxGlobalIndex + 1);
  const twelvthMaxLocalIndex = getNMaxIndex(0, slice12.length, slice12);
  const twelvthMaxGlobalIndex =
    eleventhMaxGlobalIndex + 1 + twelvthMaxLocalIndex;

  const digit1 = parsedIntBattery[firstMaxIndex];
  const digit2 = parsedIntBattery[secondMaxGlobalIndex];
  const digit3 = parsedIntBattery[thirdMaxGlobalIndex];
  const digit4 = parsedIntBattery[fourthMaxGlobalIndex];
  const digit5 = parsedIntBattery[fifthMaxGlobalIndex];
  const digit6 = parsedIntBattery[sixthMaxGlobalIndex];
  const digit7 = parsedIntBattery[seventhMaxGlobalIndex];
  const digit8 = parsedIntBattery[eighthMaxGlobalIndex];
  const digit9 = parsedIntBattery[ninethMaxGlobalIndex];
  const digit10 = parsedIntBattery[tenthMaxGlobalIndex];
  const digit11 = parsedIntBattery[eleventhMaxGlobalIndex];
  const digit12 = parsedIntBattery[twelvthMaxGlobalIndex];

  const resultNum = [
    digit1,
    digit2,
    digit3,
    digit4,
    digit5,
    digit6,
    digit7,
    digit8,
    digit9,
    digit10,
    digit11,
    digit12,
  ].join("");
  total += parseInt(resultNum);
});

console.log("total is: ", total);
