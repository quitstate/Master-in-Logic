const getPercentage = (percentage, number) => {
  let result = 0;
  result = (percentage / 100) * number;
  return result;
};

module.exports = getPercentage;
