const matchVowels = require("./exercise16");
const string1 = "check the number of vowels that this sentence has";
const string2 = "chck";
const result1 = 13;
const result2 = 0;

test("Check if function matchVowels is define", () => {
  expect(matchVowels).toBeDefined();
});

test("Check the function matchVowels", () => {
  expect(matchVowels(string1)).toEqual(result1);
});

test("Check the function matchVowels when don't have vowels", () => {
  expect(matchVowels(string2)).toEqual(result2);
});