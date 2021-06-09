const checkEmail = require("./exercise39");

test("Check if function checkEmail is define", () => {
  expect(checkEmail).toBeDefined();
});

test("Check the function checkEmail", () => {
  expect(checkEmail("hola@hotmail.com")).toEqual(true);
});

test("Check the function checkEmail", () => {
  expect(checkEmail("holahotmail.com")).toEqual(false);
});
