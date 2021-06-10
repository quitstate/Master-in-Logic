const triangle = (number) => {
  let middle = Math.floor(number - 1);
  let result = "";

  for (let row = 0; row < number; row++) {
    let level = "";

    for (let column = 0; column < 2 * number - 1; column++) {
      if (middle - row <= column && middle + row >= column) {
        level += "*";
      } else {
        level += " ";
      }
    }
    result += level + "\n";
  }
  return result;
};

module.exports = triangle;
