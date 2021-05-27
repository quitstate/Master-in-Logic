const impar = require("./exercise7");

test("Check if the function impar is define", () => {
  expect(impar).toBeDefined();
});

test("Check the function impar", () => {
  expect(impar(1, 100)).toEqual(50);
});
