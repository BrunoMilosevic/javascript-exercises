const palindromes = function (str) {
   newStr = str.replace(/[.,!\s]+/g, "").toLowerCase();
   return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
