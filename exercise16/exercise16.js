const matchVowels = (string) => {
    const regex = /[aeiou]/gi;
    const result = string.match(regex);
    return result ? result.length : 0;
}

module.exports = matchVowels;