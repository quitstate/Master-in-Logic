const wordsToUpperCase = require("./exercise23");

test("Check if function wordsToUpperCase is define", () => {
  expect(wordsToUpperCase).toBeDefined();
});

test("Check the function wordsToUpperCase", () => {
  expect(wordsToUpperCase("hola como estas")).toEqual("Hola Como Estas");
});
