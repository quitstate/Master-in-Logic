const censored = (sentece, word) => {
  if (sentece === undefined && word === undefined) {
    return "There aren't sentence";
  }
  if (word === undefined) {
    return "There aren't word to censor";
  }
  let sentenceClean = sentece.replace(/[,!.]/g, "").toLowerCase();
  let sentenceCensored = sentenceClean.replace(
    new RegExp(word, "gi"),
    "[-CENSORED-]"
  );
  return sentenceCensored;
};

module.exports = censored;
