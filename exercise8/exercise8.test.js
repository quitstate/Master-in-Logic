const reverseNumber = require("./exercise8");

test("Check if the function reverseNumber is define", () => {
  expect(reverseNumber).toBeDefined();
});

test("Check the function reverseNumber with positive number", () => {
  expect(reverseNumber(54)).toEqual(45);
});

test("Check the function reverseNumber with negative number", () => {
    expect(reverseNumber(-1253)).toEqual(-3521);
  });