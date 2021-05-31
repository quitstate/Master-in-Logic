const squareArray = (array) => {
  const arrayNumbers = array.filter((number) => {
    return typeof number === "number";
  });
  const result = arrayNumbers.map((number) => {
    return number * number;
  });
  return result;
};

module.exports = squareArray;
