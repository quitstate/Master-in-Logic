const permutation = (array, number) => {
  let arrayOrdered = array.sort();
  for (let i = 0; i < number; i++) {
    if (arrayOrdered.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
};

console.log(permutation([6, 5, 4, 3, 2, 1], 6));

module.exports = permutation;
