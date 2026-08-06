const totalIntegers = function(obj) {
  let sumIntegers = 0
  if (Array.isArray(obj)) {
    for(let i = 0; i < obj.length; i++) {
        if (Number.isInteger(obj[i])) {
            sumIntegers++;
        }
        if (Array.isArray(obj[i])) {
            sumIntegers += totalIntegers(obj[i])
        }
        if (!Array.isArray(obj[i]) && typeof(obj[i]) === 'object')
            sumIntegers += totalIntegers(obj[i])
    }
  }
  if (!Array.isArray(obj) && typeof(obj) === 'object') {
    for (const item in obj) {
        if (Number.isInteger(obj[item])) {
            sumIntegers++
        }
        if (!Array.isArray(obj[item]) && typeof(obj[item]) === 'object')
            sumIntegers += totalIntegers(obj[item])
        if(Array.isArray(obj[item])) {
            sumIntegers += totalIntegers(obj[item])
        }
    }
  }
  if (typeof(obj) != 'object')
    return undefined
  return sumIntegers

};
  
// Do not edit below this line
module.exports = totalIntegers;
