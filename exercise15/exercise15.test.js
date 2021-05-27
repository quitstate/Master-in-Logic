const mostUsedLetter = require("./exercise15");

test("Check if function mostUsedLetter is define", () => {
  expect(mostUsedLetter).toBeDefined();
});

test("Check the function mostUsedLetter", () => {
  expect(mostUsedLetter("cheeeeeeeeeck me")).toEqual(
    "The most used letter is e"
  );
});
