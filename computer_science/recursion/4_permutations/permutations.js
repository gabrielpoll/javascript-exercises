const permutations = function(array) {
    if (array.length === 0) {
        return [array]
    }
    let listArray = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const remainder = array.filter(item => item !== current);
        const perms = permutations(remainder);
        for (permuts of perms) {
            let final = [current, ...permuts];
            listArray.push(final);
        }
    }
    return listArray;
};
  
// Do not edit below this line
module.exports = permutations;
