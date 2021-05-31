const getDays = require('./exercise27');

test('Check if function getDays is define', () => {
    expect(getDays).toBeDefined();
})

test('Check the function getDays', () => {
    expect(getDays(920)).toEqual("Equivale a 2 años, 6 meses y 10 dias.")
})

