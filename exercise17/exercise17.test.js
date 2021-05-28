const exercise17 = require("./exercise17");
const result = "1" + "\n" + "2" + "\n" + "buzz" + "\n" + "4" + "\n" + "lightyear" + "\n" 
+ "buzz" + "\n" + "7" + "\n" + "8" + "\n" + "buzz" + "\n" + "lightyear" + "\n"
+ "11" + "\n" + "buzz" + "\n" + "13" + "\n"+ "14" + "\n" + "BuzzLightyear" + "\n";

test('Check if function oneToNumber is define', () => {
    expect(exercise17.oneToNumber).toBeDefined();
})

test('Check the function oneToNumber', () => {
    expect(exercise17.oneToNumber(16)).toEqual(result);
})

test('Check if function buzz is define', () => {
    expect(exercise17.buzz).toBeDefined();
})

test('Check the function buzz with 5', () => {
    expect(exercise17.buzz(5)).toEqual("lightyear");
})

test('Check the function buzz with 3', () => {
    expect(exercise17.buzz(3)).toEqual("buzz");
})

test('Check the function buzz with 15', () => {
    expect(exercise17.buzz(15)).toEqual("BuzzLightyear");
})