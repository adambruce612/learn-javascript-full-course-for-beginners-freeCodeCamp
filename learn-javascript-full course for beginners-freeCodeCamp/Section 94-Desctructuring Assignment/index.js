/*****USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS*****/
// Destructuring assignment is a special syntax for neatly assigning values taken directly from an object to a variable .
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// the old way of assigning object values to variables
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54


// Faster way using destructuring. The code is creating variables a, b, and c and assignment them values from the object voxel.
const { x: a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

/*****DESTRUCTURING ASSIGNMENT WITH NESTED OBJECTS*****/
// You can also use destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max: maxOfTomorrow }} = forecast; // Destructures twice to set max inside of tomorrow to maxOfTomorrow
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

/*****USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS*****/
// You can use destructuring assignment to assign variables from arrays.
// The difference between destructuring from arrays and destructuring from objects is you cannot specify which element from the array to go into a variable.
const [z, x] = [1 , 2, 3, 4, 5, 6]; // Assigns z and x to the first two numbers in the array
// There is a workaround where you can put additional commas to skip elements
// const [z, x, , y] = [1 , 2, 3, 4, 5, 6]; // The third element will be skipped and the fourth element will be assigned to y.
console.log(z, x);\

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]; // Switches the values of a and b variables. a is not 6 and b is 8.
})();
// You can use destructuring of arrays to switch the places of variables
console.log(a);
console.log(b);

/*****USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR*****/
// You can use destructuring assignment with the rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {

    const [ , , ...arr] = list; // this line puts nothing into the first two elements but assigns everything else to the arr variable
//  const [ a, b, ...arr] = list; // this would assign the first element to a, the second element to b, and the rest of the array to the arr variable

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

/*****USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS*****/
// You can use destructuring assignment to pass an object as a function's parameter
const starts = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half( { max, min }) { // when stats gets passed in it will be destructured as to only get max and min - commonly used with API calls
        return (max + min) / 2.0
    };

})();
console.log(stats);
console.log(half(stats));