const reverseString = function(str) {
    let newStr = "";
    let loopStart = str.length - 1;

    for(let i = loopStart; i >= 0; i--){
        newStr += str.charAt(i);
    }

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
