const capicua = (number) => {
  let arrayReversed = number.toString().split("").reverse();
  let numberReverse = parseInt(arrayReversed.join(""));
  if (number === numberReverse) {
    return true;
  } else {
    return false;
  }
};

module.exports = capicua;
