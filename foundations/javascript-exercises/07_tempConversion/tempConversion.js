const convertToCelsius = function (temperature) {
  let tempC = ((temperature - 32) * 5) / 9;
  return parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  let tempF = (temperature * 9) / 5 + 32;
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
