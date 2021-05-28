const exercise20 = require('./exercise20');

test('Check if function checkAnagram is define', () => {
    expect(exercise20.checkAnagram).toBeDefined();
})

test('Check if function cleanWord is define ', () => {
    expect(exercise20.cleanWord).toBeDefined();
})

test('Check the function checkAnagram with an anagram', () => {
    expect(exercise20.checkAnagram("Riesgo","Sergio")).toEqual(true);
})

test('Check the function checkAnagram without an anagram', () => {
    expect(exercise20.checkAnagram("Pedro","Sergio")).toEqual(false);
})

test('Check the function cleanWord ', () => {
    expect(exercise20.cleanWord("Helloworld!!!.")).toEqual("helloworld");
})
