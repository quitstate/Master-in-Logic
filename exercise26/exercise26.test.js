const fibonacci = require("./exercise26");

test("Check if function fibonacci is define", () => {
  expect(fibonacci).toBeDefined();
});

test("Check the function fibonacci", () => {
  expect(fibonacci(10)).toEqual([[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 55]);
});