const getAverage = (arrayNumbers) => {
  let sum = arrayNumbers.reduce((accumulator, curretNumber) => {
    return accumulator + curretNumber;
  });
  let average = sum / arrayNumbers.length;
  return average;
};

module.exports = getAverage;
