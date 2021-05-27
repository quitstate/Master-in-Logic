const reverseNumber = (number) => {
  let numberInverted = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
  return numberInverted;
};

module.exports = reverseNumber;
