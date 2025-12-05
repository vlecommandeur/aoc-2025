import { parseIngredients } from "../parser.js";

const { freshIngredientRanges, availableIngredientIDs } =
  parseIngredients("day5/input.txt");

const freshIngredients = [];

freshIngredientRanges.forEach((range) =>
  availableIngredientIDs.forEach((ingredient) => {
    if (
      ingredient >= range[0] &&
      ingredient <= range[1] &&
      !freshIngredients.includes(ingredient)
    ) {
      freshIngredients.push(ingredient);
    }
  })
);

console.log("res: ", freshIngredients.length);
