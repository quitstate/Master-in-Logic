const getAngle = (aperture) => {
  let result = "Full Angle";
  if (aperture < 90) {
    result = "Acute Angle";
  } else if (aperture === 90) {
    result = "Right Angle";
  } else if (aperture > 90 && aperture < 180) {
    result = "Obtuse Angle";
  } else if (aperture === 180) {
    result = "Plain Angle";
  } else if (aperture > 180 && aperture < 360) {
    result = "Concave angle";
  }
  return result;
};

module.exports = getAngle;
