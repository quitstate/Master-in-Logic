const getJustOne = (string) => {
  let counters = {};
  let result = [];
  let letters = string.split("").filter((letter) => letter.trim().length >= 1);
  for (const letter of letters) {
    if (counters[letter]) {
      counters[letter]++;
    } else {
      counters[letter] = 1;
    }
  }
  for (letter in counters) {
    if (counters[letter] === 1) {
      result.push(letter);
    }
  }
  return [result, result[0]];
};

module.exports = getJustOne;
