const getMayorNumber = (number1, number2) => {
  if (number1 > number2) {
    return `The number ${number1.toString()} is mayor than ${number2.toString()}`;
  } else if (number1 < number2) {
    return `The number ${number2.toString()} is mayor than ${number1.toString()}`;
  } else if (number1 === number2) {
    return `The number ${number2.toString()} is equal to ${number1.toString()}`;
  } else {
    return "Incorrect numbers";
  }
};

module.exports = getMayorNumber;
