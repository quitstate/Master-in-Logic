const removeDuplicates = (array) => {
  let result = array.filter((number, index) => {
    return array.indexOf(number) === index && typeof number === 'number';
  });
  return result;
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 6, 7, 8, "hola"]));

module.exports = removeDuplicates;
