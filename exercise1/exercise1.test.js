const multiplicationTable = require("./exercise1");

const arrayCheck = [
  "# Tabla del 5#",
  "1 x 5 = 5",
  "2 x 5 = 10",
  "3 x 5 = 15",
  "4 x 5 = 20",
  "5 x 5 = 25",
  "6 x 5 = 30",
  "7 x 5 = 35",
  "8 x 5 = 40",
  "9 x 5 = 45",
  "10 x 5 = 50"
];

test("Check if a function palindromo is define", () => {
    expect(multiplicationTable).toBeDefined();
  });


test("Check the multiplication table", () => {
  expect(multiplicationTable(5)).toEqual(arrayCheck);
});