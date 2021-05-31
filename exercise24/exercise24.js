const permutation = (array, number) => {
  let arrayOrdered = array.sort();
  for (let i = 0; i < number; i++) {
    if (arrayOrdered.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
};

module.exports = permutation;
