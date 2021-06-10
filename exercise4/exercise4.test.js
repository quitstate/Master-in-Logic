const invert = require('./exercise4');

test("Check if function invert is define", () => {
    expect(invert).toBeDefined();
});

test("Check the function invert", () => {
    expect(invert("hello")).toEqual("olleh");
})