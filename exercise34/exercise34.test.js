const operations = require("./exercise34");

const result1 =
  "Sum: 10 + 2 = 12" +
  "\n" +
  "Subtraction: 10 - 2 = 8" +
  "\n" +
  "Multiplication: 10 * 2 = 20" +
  "\n" +
  "Division: 10 / 2 = 5";

const result2 =
  "Sum: 10 + 0 = 10" +
  "\n" +
  "Subtraction: 10 - 0 = 10" +
  "\n" +
  "Multiplication: 10 * 0 = 0" +
  "\n" +
  "Division with 0 is not posible";

test("Check if function operations is define", () => {
  expect(operations).toBeDefined();
});

test("Check the function operations without 0 in division", () => {
  expect(operations(10, 2)).toEqual(result1);
});

test("Check the function operations wit 0 in division", () => {
  expect(operations(10, 0)).toEqual(result2);
});
