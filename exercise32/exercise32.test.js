const squareArray = require("./exercise32");
const result = [1, 4, 9, 16, 25, 36, 49, 64, 81];

test("Check if the squareArray is define", () => {
  expect(squareArray).toBeDefined();
});

test("Check the function squareArray", () => {
  expect(squareArray([1, 2, 3, 4, "hola", "jejeje", 5, 6, 7, 8, 9])).toEqual(
    result
  );
});
