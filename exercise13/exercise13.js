const divideArray = (arr, number) => {
  let arrayResult = [];
  for (let element of arr) {
    let ultimate = arrayResult[arrayResult.length - 1];
    if (!ultimate || ultimate.length === number) {
      arrayResult.push([element]);
    } else {
      ultimate.push(element);
    }
  }
  return arrayResult;
};

module.exports = divideArray;
