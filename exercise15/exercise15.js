const mostUsedLetter = (string) => {
  let allLetters = {};
  let maxRepetitions = 0;
  let letterMostUsed = "";
  let result = "The most used letter is ";
  for (const letter of string) {
    if (!allLetters[letter]) {
      allLetters[letter] = 1;
    } else {
      allLetters[letter]++;
    }
  }

  for (const letter in allLetters) {
    if (allLetters[letter].toString().trim() && allLetters[letter] > maxRepetitions) {
      maxRepetitions = allLetters[letter];
      letterMostUsed = letter;
    }
  }

  result += letterMostUsed;
  return result;
};

module.exports = mostUsedLetter;
