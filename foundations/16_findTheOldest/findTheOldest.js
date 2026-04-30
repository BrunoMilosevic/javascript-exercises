const findTheOldest = function(arr) {
    let sortedArray = arr.sort((a, b) =>{
        if (a.yearOfDeath === undefined){
            a.yearOfDeath = new Date().getFullYear();
        }
        if(b.yearOfDeath === undefined){
            b.yearOfDeath = new Date().getFullYear();
        } 
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth){
            return -1;
        }
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return 1;
        }
    })
    return sortedArray.at(-1);
};
console.log(findTheOldest([{
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]))

// Do not edit below this line
module.exports = findTheOldest;
