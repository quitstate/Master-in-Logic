const downToZero = require("./exercise12");

const resultFunction = () => {
    let number = 100;
    let result = `--- The ${number} to 0 --- \n`;
    while (number > 0) {
      result += `- nº${number} \n`;
      number -= 8;
    }
    result += "--- END ---";
    return result;
}

test("Check if function downToZero is define", () => {
  expect(downToZero).toBeDefined();
});

test("Check the function downToZero", () => {
  expect(downToZero(100)).toEqual(resultFunction());
});
