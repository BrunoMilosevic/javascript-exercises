const sumAll = function(num1, num2) {
    if ((Number.isInteger(num1) && num1 >= 0) && (Number.isInteger(num2) && num2 >= 0)){
        let min = Math.min(num1, num2);
        let max = Math.max(num1, num2);
        let count = max - min + 1;
        return (count * (min + max)) / 2;
    }
    return "ERROR";
    

};

// Do not edit below this line
module.exports = sumAll;
