const exercise18 = require('./exercise18');
const result = "1" + "\n" + "2" + "\n" + "4" + "\n" + "5" + "\n" + "10" + "\n" + "20" + "\n";

test('Check if function showDividers is define', () => {
    expect(exercise18.showDividers).toBeDefined();
})

test('Check if function divider is define', () => {
    expect(exercise18.divider).toBeDefined();
})

test('Check the function showDividers', () => {
    expect(exercise18.showDividers(20)).toEqual(result);
})

test('Check the function divider with a posible divider', () => {
    expect(exercise18.divider(20,5)).toEqual(5);
})

test('Check the function divider with a imposible divider', () => {
    expect(exercise18.divider(20,8)).toEqual(0);
})