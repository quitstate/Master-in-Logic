const repeatString = require('./exercise14');
const result = "holaholahola";
const str = "hola";
const number = 3;

test('Check if function repeatString is define', () => {
    expect(repeatString).toBeDefined();
})

test('Check the function repeatString', () => {
    expect(repeatString(str,number)).toEqual(result);
})

