const getAllSubStrings = (word) => {
    let substrings = [];
    for (letter in word) {
        let start = parseInt(letter);
        for (let i = 0; i <= word.length - start; i++) {
            let end = start + i;
            substrings.push(word.substring(start,end));
        }
    }
    return substrings.filter(element => element.length >= 1);
}

console.log(getAllSubStrings("hello"))

module.exports = getAllSubStrings;