const reduceString = (string, number) => {
  let result = "";
  if (typeof string === "string" && typeof number === "number") {
    result = string.substr(0, number);
  } else {
    result = "Please insert first param string and the second number";
  }
  return result;
};

module.exports = reduceString;
