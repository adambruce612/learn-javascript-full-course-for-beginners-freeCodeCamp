// The ternary operator is like a one line if-else expression
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
    return a === b ? true : false; // Does the same as the above if-else statement
    // In this example the most effecient code would actually be: return a === b;
}

checkEqual(1, 2);