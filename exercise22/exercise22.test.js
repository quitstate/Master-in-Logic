const getMayorNumber = require("./exercise22");

test("Check if function getMayorNumber is define", () => {
  expect(getMayorNumber).toBeDefined();
});

test("Check the function getMayorNumber with number1 mayor to number 2", () => {
  expect(getMayorNumber(4, 3)).toEqual("The number 4 is mayor than 3");
});

test("Check the function getMayorNumber with number2 mayor to number 1", () => {
  expect(getMayorNumber(4, 5)).toEqual("The number 5 is mayor than 4");
});

test("Check the function getMayorNumber with number1 equal to number 2", () => {
  expect(getMayorNumber(8, 8)).toEqual("The number 8 is equal to 8");
});

test("Check the function getMayorNumber with number1 equal to number 2", () => {
  expect(getMayorNumber("hi", 8)).toEqual("Incorrect numbers");
});