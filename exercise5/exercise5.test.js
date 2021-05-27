const getPercentage = require("./exercise5");

test("Check if function getPercentage is define", () => {
  expect(getPercentage).toBeDefined();
});

test("Check the function getPercentage", () => {
  expect(getPercentage(50, 1000)).toEqual(500);
});
