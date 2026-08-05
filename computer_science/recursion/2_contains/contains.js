const contains = function(obj, something) {
  if (typeof(obj) === 'object') {
    for (const item in obj) {
      if (Object.is(obj[item], something)) {
        return true
      }
      if (typeof(obj[item]) === 'object') {
        if (contains(obj[item], something) === true)
          return true
      }
    }
  return false
  }
};
  
// Do not edit below this line
module.exports = contains;
