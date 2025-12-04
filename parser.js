const fs = require("fs");
const path = require("path");

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

module.exports = { parseInput };
