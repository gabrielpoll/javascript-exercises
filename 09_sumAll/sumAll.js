const sumAll = function(a, b) {
  if (a < 0 || b < 0) {
    return 'ERROR';
  } else if (Number(a) === a && a % 1 !== 0 || Number(b) === b && b % 1 !== 0) {
    return 'ERROR';
  }
  let sum = 0;
  if (a < b) {
    for (let i = a; a < b + 1; a++) {
        sum += a;
    }
  } else {
    for (let i = b; b < a + 1; b++) {
        sum += b;
    }
  }
  return sum;
};
console.log(sumAll(1, 2.5));

// Do not edit below this line
module.exports = sumAll;
