const removeDuplicates = require('./exercise30');

test('Check if function removeDuplicates is define ', () => {
    expect(removeDuplicates).toBeDefined();
})

test('Check the function removeDuplicates', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 6, 7, 8, "hola"])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
})

