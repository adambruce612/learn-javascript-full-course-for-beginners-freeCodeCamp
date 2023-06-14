// You cannot reassign a variable declared with const but you can mutate an array.
// The following example will not work.
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s=[2,5,7]; this will throw an error as you are trying to re-assign.
    // You could mutate the array however using bracket notation.
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}

editInPlace();

console.log(s);