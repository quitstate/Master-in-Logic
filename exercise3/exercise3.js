const coincidences = (sentence, wordToFind) => {
    let result = 0;
    let allWords = {};
    const arrayWords = sentence.toLowerCase().replace(/[.!,-]/gi,"").split(" ");
    if (arrayWords.includes(wordToFind)) {
        for(let word of arrayWords){
            if (word in allWords) {
                ++allWords[word];
            } else {
                allWords[word] = 1
            }
        }
        result = allWords[wordToFind];
        return result;
    } else {
        return result;
    }

};

module.exports = coincidences;