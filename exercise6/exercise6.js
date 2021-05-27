const drawRectangle = (number) => {
  let rectangle = drawSide(number) + "\n";
  for (let i = 2; i < number; i++) {
    let middle = "*";
    for (let k = 2; k < number; k++) {
      middle += " ";
    }
    middle += "*";
    rectangle += middle + "\n";
  }
  rectangle += drawSide(number);
  return rectangle;
};

const drawSide = (number) => {
  let side = "";
  for (let i = 0; i < number; i++) {
    side += "*";
  }
  return side;
};

console.log(drawRectangle(5));

module.exports = {drawRectangle, drawSide};