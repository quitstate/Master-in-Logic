const isProperty = (object, property) => {
  if (
    typeof object === "object" &&
    typeof property === "string" &&
    object.hasOwnProperty(property)
  ) {
    return true;
  }
  return false;
};

const user = {
  name: "Ronald",
  lastname: "Vezga",
};

module.exports = { isProperty, user };
