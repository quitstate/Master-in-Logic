const checkUpperOrLowerCase = (string) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let counterLowerLetter = 0;
  let counterUpperLetter = 0;
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    if (alphabet.includes(array[i])) {
      counterLowerLetter++;
    } else {
      counterUpperLetter++;
    }
  }
  if (counterLowerLetter > counterUpperLetter) {
    return string.toLowerCase();
  } else {
    return string.toUpperCase();
  }
};

console.log(checkUpperOrLowerCase("Victor"));

module.exports = checkUpperOrLowerCase;
