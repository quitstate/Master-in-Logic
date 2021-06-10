const randomNumber = require('./exercise42');

test('Check if function randomNumber is define', () => {
    expect(randomNumber).toBeDefined();
})

test('Check the function randomNumber', () => {
    expect(randomNumber(1,100)).toBeGreaterThanOrEqual(1);
    expect(randomNumber(1,100)).toBeLessThanOrEqual(100);
})

