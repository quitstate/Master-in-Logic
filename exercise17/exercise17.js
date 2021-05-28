const oneToNumber = (number) => {
  let result = "";
  for (let i = 1; i < number; i++) {
    result += buzz(i).toString() + "\n";
  }
  return result;
};

const buzz = (number) => {
  let result = "";
  if (number % 3 === 0 && number % 5 === 0) {
    result = "BuzzLightyear";
  } else if (number % 3 === 0) {
    result = "buzz";
  } else if (number % 5 === 0) {
    result = "lightyear";
  } else {
    return number;
  }
  return result;
};

module.exports = { oneToNumber, buzz };
