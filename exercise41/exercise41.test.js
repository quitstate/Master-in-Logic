const triangle = require("./exercise41");

const result =
  "   *   " + "\n" + "  ***  " + "\n" + " ***** " + "\n" + "*******" + "\n";

test("Check if function triangle is define", () => {
  expect(triangle).toBeDefined();
});

test("Check the function triangle", () => {
  expect(triangle(4)).toEqual(result);
});
