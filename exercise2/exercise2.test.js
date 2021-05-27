const palindrome = require('./exercise2');

test("Check if a function palindromo is define", () => {
  expect(palindrome).toBeDefined();
});

test("Is a Palindromo", () => {
  expect(palindrome("otto")).toEqual(true);
});

test("Is not a Palindromo", () => {
  expect(palindrome("Pedro")).toEqual(false);
});