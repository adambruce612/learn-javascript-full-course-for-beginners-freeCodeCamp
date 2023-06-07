// You can return early from a function with the return statement
// Setup 
function abTest (a, b) {
    // Only change code below this line - modify the function so if a or b are less than 0 the function will
    // automically exit with a value of undefined
    if ( a < 0 || b < 0) {
        return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change these values to test your code
console.log(abTest(2, 2));