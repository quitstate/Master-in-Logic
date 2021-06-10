const loops = require("./exercise50");

test("Check if function loops is define", () => {
  expect(loops).toBeDefined();
});

test("Check the function loops", () => {
  expect(loops(28861)).toEqual(5);
});
