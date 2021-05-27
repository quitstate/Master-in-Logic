const palindrome = (word) => {
    const array = word.split('');
    const arrayReversed = array.reverse();
    const wordReversed = arrayReversed.join('');
    if (word === wordReversed) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindrome;