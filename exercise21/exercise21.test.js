const reduceString = require("./exercise21");

test("Check if function reduceString is define", () => {
  expect(reduceString).toBeDefined();
});

test("Check the function reduceString without the correct params", () => {
  expect(reduceString(5, 4)).toEqual(
    "Please insert first param string and the second number"
  );
});

test("Check the function reduceString with the correct params", () => {
  expect(reduceString("hello world", 5)).toEqual("hello");
});
