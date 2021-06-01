const getArrayValue = (array) => {
  let result = [];
  result.push(array[0]);
  result.push(array[array.length - 1]);
  return result;
};

module.exports = getArrayValue;
