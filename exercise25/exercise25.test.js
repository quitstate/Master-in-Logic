const checkUpperOrLowerCase = require('./exercise25');

test('Check if function checkUpperOrLowerCase is define', () => {
    expect(checkUpperOrLowerCase).toBeDefined();
})

test('Check the function checkUpperOrLowerCase when I have more uppercase letters', () => {
    expect(checkUpperOrLowerCase("TESt")).toEqual("TEST");
})

test('Check the function checkUpperOrLowerCase when I have more lowercase letters', () => {
    expect(checkUpperOrLowerCase("AVIgail")).toEqual("avigail");
})
