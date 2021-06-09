const getConsonantAndVowel = (string) => {
  let vowels = 0;
  let consonants = 0;
  const stringClean = string
    .split("")
    .filter((letter) => /[áéíóú\w]/gi.test(letter) && isNaN(letter)).join("");

  for (const letter of stringClean) {
    if (/[áéíóúaeiou]/gi.test(letter)) {
      vowels += 1;
    } else {
      consonants += 1;
    }
  }
  const result = `Consonants: ${consonants}` + "\n" + `Vowels: ${vowels}`;
  return result;
};

module.exports = getConsonantAndVowel;
