const capicua = require("./exercise29");

test("Check if function capicua is define", () => {
  expect(capicua).toBeDefined();
});

test("Check the function capicua if I have one", () => {
  expect(capicua(2002)).toEqual(true);
});

test("Check the function capicua if I don't have one", () => {
  expect(capicua(2005)).toEqual(false);
});
