const highAndLow = require('./exercise40');
const result = { low: 1, high: 5 };

test('Check if function highAndLow is define', () => {
    expect(highAndLow).toBeDefined();
})

test('Check the function highAndLow', () => {
    expect(highAndLow([1,2,3,4,5])).toEqual(result);
})
