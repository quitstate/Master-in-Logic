const getConsonantAndVowel = require("./exercise36");
const result = "Consonants: 3" + "\n" + "Vowels: 2";

test("Check if function getConsonantAndVowel", () => {
  expect(getConsonantAndVowel).toBeDefined();
});

test("Check the function getConsonantAndVowel", () => {
  expect(getConsonantAndVowel("hello")).toEqual(result);
});
