const matchVowels = (string) => {
    const regex = /[aeiou]/gi;
    const result = string.match(regex);
    return result.length;
}

module.exports = matchVowels;