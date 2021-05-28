const censored = require("./exercise11");
const result = "[-CENSORED-] how are you [-CENSORED-] [-CENSORED-]";

test("Check if the function censored is define", () => {
  expect(censored).toBeDefined();
});

test("Check the function censored without params", () => {
  expect(censored()).toEqual("There aren't sentence");
});

test("Check the function censored without a word to search", () => {
  expect(censored("hello")).toEqual("There aren't word to censor");
});

test("Check the function censored", () => {
  expect(censored("hello, how are you!!!!, hello, hello", "hello")).toEqual(
    result
  );
});
