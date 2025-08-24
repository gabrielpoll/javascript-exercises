function repeatString(string, quantity) { 
    let newString = '';
    if (quantity < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < quantity; i++) {
            newString += string;
        }}
    return newString;
}
console.log(repeatString('hi', -1));

// Do not edit below this line
module.exports = repeatString;
