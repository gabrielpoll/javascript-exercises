const convertToCelsius = function(fahrenheit) {
  let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
  return Number(fahrenheitToCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let celsiusToFahrenheit = (celsius * 9/5) + 32;
  return Number(celsiusToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(100));