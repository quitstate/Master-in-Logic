const coincidences = require('./exercise3');

test("Check if a function coincidences is define", () => {
    expect(coincidences).toBeDefined();
});

test("Check the number of times a word is repeated in a sentence, for example: ronald (0)", () => {
    expect(coincidences("hola como estas, soy Ronald Vezga, repito Ronald Vezga", "ronald")).toEqual(2);
})

test("Check the number of times a word is repeated in a sentence, for example: pedro (0)", () => {
    expect(coincidences("hola como estas, soy Ronald Vezga, repito Ronald Vezga", "pedro")).toEqual(0);
})