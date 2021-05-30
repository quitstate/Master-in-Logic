const wordsToUpperCase = require("./exercise23");

test("Check if function wordsToUpperCase is define", () => {
  expect(wordsToUpperCase).toBeDefined();
});

test("Check the function wordsToUpperCase", () => {
  expect(wordsToUpperCase("hello how are you")).toEqual("Hello How Are You");
});
