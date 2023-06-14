// A const declaration alone does not really protect your data from mutation.
// If you have an object or an array you can still mutate it even if it is declared with const.
// Object.freeze will prevent data mutation. 
// The following function demonstrates object.freeze. 
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // MATH_CONSTANTS is now frozen

    try {
        MATH_CONSTANTS.PI = 99; // will not run since MATH_CONSTANTS is frozen
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);