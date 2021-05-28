const showDividers = (number) => {
  let result = "";
  for (let i = 0; i <= number; i++) {
    let isDivider = divider(number, i);
    if (isDivider) {
      result += isDivider.toString() + "\n";
    }
  }
  return result;
};

const divider = (number, posibleDivider) => {
  if (number % posibleDivider === 0) {
    return posibleDivider;
  }

  return 0;
};

module.exports = { showDividers, divider };
