const getOddAndEven = require('./exercise51');
const result = {
    odd: [2,4],
    even: [1,3]
};

test('Check if function getOddAndEven is define', () => {
    expect(getOddAndEven).toBeDefined();
})

test('Check the function getOddAndEven', () => {
    expect(getOddAndEven([1,2,3,4])).toEqual(result);
})

