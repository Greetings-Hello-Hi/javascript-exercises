const reverseString = function(origString) {
    let newString = '';
    for (let i = origString.length - 1; i >= 0; i--) {
        newString += origString.charAt(i);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
