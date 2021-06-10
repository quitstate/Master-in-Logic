const getAverage = require("./exercise43");

test('Check if function average is define', () => {
    expect(getAverage).toBeDefined();
})

test('Check the function average', () => {
    expect(getAverage([1,2,3,4,5,6])).toEqual(3.5);
})

