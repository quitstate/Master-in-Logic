const highAndLow = (numbers) => {
  let sorted = numbers.sort((a, b) => a - b);
  return {
      low: sorted[0],
      high: sorted[sorted.length - 1]
  }
};

module.exports = highAndLow;
