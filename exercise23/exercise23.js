const wordsToUpperCase = (string) => {
  let array1 = string.split(" ");
  let array2 = [];
  for (let i = 0; i < array1.length; i++) {
    array2.push(
      array1[i].replace(array1[i].charAt(0), array1[i].charAt(0).toUpperCase())
    );
  }
  let result = array2.join(" ");
  return result;
};

module.exports = wordsToUpperCase;
