const getAngle = require("./exercise31");

test("Check if function getAngle is define", () => {
  expect(getAngle).toBeDefined();
});

test("Check the function getAngle when is an Acute Angle", () => {
  expect(getAngle(70)).toEqual("Acute Angle");
});

test("Check the function getAngle when is a Right Angle", () => {
  expect(getAngle(90)).toEqual("Right Angle");
});

test("Check the function getAngle when is a Obtuse Angle", () => {
  expect(getAngle(120)).toEqual("Obtuse Angle");
});

test("Check the function getAngle when is a Plain Angle", () => {
  expect(getAngle(180)).toEqual("Plain Angle");
});

test("Check the function getAngle when is a Concave angle", () => {
  expect(getAngle(199)).toEqual("Concave angle");
});

test("Check the function getAngle when is a Full Angle", () => {
  expect(getAngle(361)).toEqual("Full Angle");
});
