const operations = (number1, number2) => {
  let sum = number1 + number2;
  let subtraction = number1 - number2;
  let multiplication = number1 * number2;
  let division = number1 / number2;
  let resultSum =
    `Sum: ${number1.toString()} + ${number2.toString()} = ` + sum.toString();
  let resultSub =
    `Subtraction: ${number1.toString()} - ${number2.toString()} = ` +
    subtraction.toString();
  let resultMul =
    `Multiplication: ${number1.toString()} * ${number2.toString()} = ` +
    multiplication.toString();
  let resultDiv = "";
  if (number2 === 0) {
    resultDiv = "Division with 0 is not posible";
  } else {
    resultDiv =
      `Division: ${number1.toString()} / ${number2.toString()} = ` +
      division.toString();
  }
  let result =
    resultSum + "\n" + resultSub + "\n" + resultMul + "\n" + resultDiv;
  return result;
};

module.exports = operations;
