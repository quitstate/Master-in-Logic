const getAllSubStrings = require("./exercise46");
const result = [
  "h",
  "he",
  "hel",
  "hell",
  "hello",
  "e",
  "el",
  "ell",
  "ello",
  "l",
  "ll",
  "llo",
  "l",
  "lo",
  "o",
];

test("Check if function getAllSubStrings is define", () => {
  expect(getAllSubStrings).toBeDefined();
});

test("Check the function getAllSubStrings", () => {
  expect(getAllSubStrings("hello")).toEqual(result);
});
