const removeFromArray = function(arr, ...numsToRemove) {
    return arr.filter((num) => !numsToRemove.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
