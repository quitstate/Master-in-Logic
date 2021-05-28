const coincidences = require('./exercise3');

test("Check if function coincidences is define", () => {
    expect(coincidences).toBeDefined();
});

test("Check the number of times a word is repeated in a sentence, for example: am (2)", () => {
    expect(coincidences("hello how are you, I am Ronald Vezga, I repeat I am Ronald Vezga", "am")).toEqual(2);
})

test("Check the number of times a word is repeated in a sentence, for example: pedro (0)", () => {
    expect(coincidences("hello how are you, I am Ronald Vezga, I repeat I am Ronald Vezga", "pedro")).toEqual(0);
})