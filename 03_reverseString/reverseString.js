const reverseString = function(origString) {
    let stringLength = origString.length;
    let newString = '';
    for (let i = stringLength - 1; i >= 0; i--) {
        let character = origString.charAt(i);
        newString += character;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
