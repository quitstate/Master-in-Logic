const twoWords = (elements) => {
  let newElements = [];
  for (const word of elements) {
    if (word.split(" ").length >= 2) {
      newElements.push(word);
    }
  }
  return newElements;
};

module.exports = twoWords;
