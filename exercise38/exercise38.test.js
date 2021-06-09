const exercise38 = require('./exercise38');
const result = [ 0, 1, 4, 9, 16 ];

test('Check if function square is define', () => {
    expect(exercise38.square).toBeDefined();
})

test('Check the function square', () => {
    expect(exercise38.square(2)).toEqual(4);
})

test('Check if function showSquare is define', () => {
    expect(exercise38.showSquare).toBeDefined();
})

test('Check the function showSquare', () => {
    expect(exercise38.showSquare(4)).toEqual(result);
})
