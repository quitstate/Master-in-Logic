const getAllSubStrings = (word) => {
    let substrings = [];
    for (const letter in word) {
        let start = letter;
        for (let i = 0; i < word.length; i++) {
            let end = (parseInt(i)  + parseInt(start));
            substrings.push(word.substrings(start,end));
        }
    }
    return substrings;
}

console.log(getAllSubStrings("hello"))

module.exports = getAllSubStrings;