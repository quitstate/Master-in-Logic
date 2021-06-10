const exercise49 = require("./exercise49");

test("Check if function isProperty is define", () => {
  expect(exercise49.isProperty).toBeDefined();
});

test("Check the function isProperty true", () => {
  expect(exercise49.isProperty(exercise49.user, "name")).toEqual(true);
});

test("Check the function isProperty false", () => {
  expect(exercise49.isProperty(exercise49.user, "nam")).toEqual(false);
});
