const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else if (num == 0) {
        return '';
    } else {
        let newString = '';
        for (let repeats = 1; repeats <= num; repeats++) {
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
