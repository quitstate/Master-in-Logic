const getArrayValue = require("./exercise35");

test("Check if function getArrayValue", () => {
  expect(getArrayValue).toBeDefined();
});

test("Check the function getArrayValue", () => {
  expect(getArrayValue([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 6]);
});
