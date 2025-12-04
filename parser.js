import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const parseInput = (inputFile) => {
  const inputPath = path.join(__dirname, inputFile);

  try {
    const data = fs.readFileSync(inputPath, "utf8");
    const lines = data.trim().split("\n");

    const result = lines.map((line) => line.trim());

    return result;
  } catch (error) {
    console.error("Error reading input file:", error);
    return [];
  }
};

const parseRanges = (inputFile) => {
  const inputPath = path.join(__dirname, inputFile);

  try {
    const data = fs.readFileSync(inputPath, "utf-8");
    const ranges = data.trim().split(",");

    return ranges
      .map((el) =>
        fillArrayRange(parseInt(el.split("-")[0]), parseInt(el.split("-")[1]))
      )
      .flat();
  } catch (error) {
    console.error("Error reading input file:", error);
    return [];
  }
};

const fillArrayRange = (n, m) => {
  const length = m - n + 1;
  return Array.from({ length }, (_, index) => n + index);
};

export { parseInput, parseRanges };
