const divideArray = require('./exercise13');
const arr = [7, 8, 9, 10, 5];
const number = 2;
const result = [[7,8],[9,10],[5]];

test('Check if function divideArray is defint', () => {
    expect(divideArray).toBeDefined();
})

test('Check the function divideArray', () => {
    expect(divideArray(arr,number)).toEqual(result);
})
