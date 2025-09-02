const palindromes = function (str) {
    let getReverseStr = str.split(` `)
                        .join(``)
                        .split(``)
                        .filter(char => /[a-zA-Z0-9]/.test(char))
                        .reverse()
                        .join(``)
                        .toLowerCase();
    console.log(getReverseStr);

    let getComparasionString = str.split(` `)
                            .join(``)
                            .split(``)
                            .filter(char => /[a-zA-Z0-9]/.test(char))
                            .join(``)
                            .toLowerCase();
    
    if (getReverseStr === getComparasionString) {
        return true;
    } else {
        return false;
    }
};

    console.log(palindromes(`r3ace3car`));

// Do not edit below this line
module.exports = palindromes;
