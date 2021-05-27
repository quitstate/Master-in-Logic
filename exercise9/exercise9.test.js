const getCommonElements = require('./exercise9');
const array1 = [4,5,6,7];
const array2 = [7,8,9,7,5];
const array3 = ["Pablo","Pedro", "Maria", "Juana", "Marco"];
const array4 = ["Ronald","Rafael", "Pedro", "Marco", "Rosa"];
const result1 = [5,7];
const result2 = ["Pedro", "Marco"];

test("Check if the function getCommonElements is define", () => {
    expect(getCommonElements).toBeDefined();
})

test("Check the function getCommonElements with array of numbers", () => {
    expect(getCommonElements(array1,array2)).toEqual(result1);
})

test("Check the function getCommonElements with array of strings", () => {
    expect(getCommonElements(array3,array4)).toEqual(result2);
})