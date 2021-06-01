const squareArray = (array) => {
  const arrayNumbers = array.filter((number) => {
    return typeof number === "number";
  });
  const result = arrayNumbers.map((number) => {
    return Math.pow(number,2);
  });
  return result;
};

module.exports = squareArray;
