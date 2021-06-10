const getAllSubStrings = require("./exercise46");
const result = [];

test("Check if function getAllSubStrings is define", () => {
  expect(getAllSubStrings).toBeDefined();
});

test("Check the function getAllSubStrings", () => {
  expect(getAllSubStrings("hello")).toEqual(result);
});
