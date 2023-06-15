// An anonymous function:
var magic = function() {
    return new Date();
};

// Re-written as an arrow function
var magic = () => {
    return new Date();
};

// Shortened even more:
const magic = () => new Date();

/*****Write Arrow Functions with Parameters*****/  
// Just like with normal functions you can pass arguments to arrow functions
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myconcat([1,2], [3,4,5]));

// Re-written as an arrow function
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1,2], [3,4,5]));

/*****Write Higher Order Arrow Functions*****/
// Arrow functions work really well with higher order functions such as map, filter, and reduce.
// Higher order functions take functions as arguments for processing collections of data.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);