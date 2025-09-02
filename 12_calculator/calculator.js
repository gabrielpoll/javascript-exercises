const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sumItensInArray = array.reduce((accum, currentValue) => accum + currentValue,
0);
  return sumItensInArray;
}

const multiply = function(array) {
  let getMultiply = array.reduce((accum, item) => accum * item, 
1);
  return getMultiply;
}


const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
  getFactorial = 1
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      getFactorial *= i;
    }
  }
  return getFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
