const theMostFinded = (data) => {
  let map = {};
  let theMostFrequent = "";
  let valueOfTheMostFrequent = 0;

  if (typeof data === "string") {
    data = data.split(" ");
  }

  for (const element of data) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  }

  for (const element in map) {
    if (map[element] > valueOfTheMostFrequent) {
      valueOfTheMostFrequent = map[element];
      theMostFrequent = element;
    }
  }

  return {
    "The Most Frequent": theMostFrequent,
    "Value Of The Most Frequent": valueOfTheMostFrequent,
  };
};

module.exports = theMostFinded;
