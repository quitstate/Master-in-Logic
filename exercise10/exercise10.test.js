const stair = require('./exercise10');
const result = "[-]" + "\n" + "[-][-]" + "\n" + "[-][-][-]" + "\n" + "[-][-][-][-]" + "\n";

test('Check if the function stair is define', () => {
    expect(stair).toBeDefined();
})

test('Check the function stair', () => {
    expect(stair(4)).toEqual(result);
})

