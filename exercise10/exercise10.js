const stair = (number) => {
  let stairCompleted = "";
  for (let level = 1; level <= number; level++) {
    let steps = "";
    for (let step = 1; step <= level; step++) {
      steps += "[-]";
    }
    stairCompleted += steps + "\n";
  }
  return stairCompleted;
};

module.exports = stair;
