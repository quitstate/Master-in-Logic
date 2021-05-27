const invert = (word) => {
    let wordInverted = "";
    const arrayLetters = word.split();
    for (let letter of word) {
        wordInverted = letter + wordInverted;
    }
    return wordInverted;
}

module.exports = invert;