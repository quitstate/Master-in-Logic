const exercise6 = require("./exercise6");
const resultDrawRectangle = "*****" + "\n" + "*   *" + "\n" + "*   *" + "\n" + "*   *" + "\n" + "*****";
const resultDrawSide = "*****";

test("Check if function drawRentangle is define", () => {
    expect(exercise6.drawRectangle).toBeDefined();
})

test("Check if function drawSide is define", () => {
    expect(exercise6.drawSide).toBeDefined();
})

test("Check the function drawRectangle", () => {
    expect(exercise6.drawRectangle(5)).toBe(resultDrawRectangle);
})

test("Check the function drawSide", () => {
    expect(exercise6.drawSide(5)).toBe(resultDrawSide);
})