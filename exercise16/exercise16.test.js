const matchVowels = require("./exercise16");
const string = "check the number of vowels that this sentence has";
const result = 13;

test("Check if function matchVowels is define", () => {
  expect(matchVowels).toBeDefined();
});

test("Check the function matchVowels", () => {
  expect(matchVowels(string)).toEqual(result);
});
