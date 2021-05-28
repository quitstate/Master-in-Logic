const checkAnagram = (word1, word2) => {
    let word1Ordered = cleanWord(word1).split('').sort().join('');
    let word2Ordered = cleanWord(word2).split('').sort().join('');
    if(word1Ordered === word2Ordered) {
        return true;
    }else {
        return false;
    }
}

const cleanWord = (word) => {
    regex = /[,.?!@]/gi;
    const result = word.replace(regex,'').toLowerCase();
    return result;
}

module.exports = {checkAnagram, cleanWord} ;