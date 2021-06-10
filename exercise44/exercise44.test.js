const twoWords = require("./exercise44");
const result = ["San Francisco", "New York"];

test("Check if function twoWords is define", () => {
  expect(twoWords).toBeDefined();
});

test("Check the function twoWords", () => {
  expect(twoWords(["hello", "San Francisco", "Ronald", "New York"])).toEqual(
    result
  );
});
