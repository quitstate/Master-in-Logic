const factorial = require("./exercise28");

test("Check if function factorial is define", () => {
  expect(factorial).toBeDefined();
});

test("Check the function factorial", () => {
  expect(factorial(8)).toEqual(40320);
});
