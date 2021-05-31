const removeDuplicates = (array) => {
  let result = array.filter((number,index) => {
    return array.indexOf(number) === index;
  });
  return result;
};

console.log(removeDuplicates([1,2,3,4,5,5,8,8,9,10,"hola"]));

module.exports = removeDuplicates;
