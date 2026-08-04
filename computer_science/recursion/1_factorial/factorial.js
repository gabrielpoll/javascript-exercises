const factorial = function(n) {
    if (n <= 1 && n >= 0) {
        return 1;
    } else if (n < 0 || n % Math.trunc(n) != 0 || typeof(n) === 'string' || Array.isArray(n)) { 
        return undefined;
    } 
     else {
        return n * factorial(n-1)
    }
};

// Do not edit below this line
module.exports = factorial;