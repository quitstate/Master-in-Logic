const permutation = require("./exercise24");

test("Check if function permutation is define", () => {
  expect(permutation).toBeDefined();
});

test("Check the function permutation when I have", () => {
  expect(permutation([9, 8, 7, 3, 2, 1, 6, 5, 4], 9)).toEqual(true);
});

test("Check the function permutation when I don't have", () => {
  expect(permutation([8, 7, 3, 2, 1, 6, 5, 4], 9)).toEqual(false);
});