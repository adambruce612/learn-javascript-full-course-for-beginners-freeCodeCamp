// The Logical AND/OR operators can check two conditions
//*****The Logical AND Operator*****
function testLogicalAnd(val) {
    // Only change code below this line

    // if (val <= 50) {
    //     if (val >= 25) {
    //         return "Yes";
    //     }
    // }

// A better way to write the code above with the AND(&&) operator rather than nesting if statements
if (val <= 50 && val >= 25) {
    return "Yes";
}

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);

//*****The Logical OR Operator*****
function testLogicalOr(val) {
    // Only change code below this line

    // if (val < 10) {
    //     return "Outside";
    // }

    // if (val > 20) {
    //     return "Outside";
    // }

// A better way to write the code above with the OR(||) operator rather than nesting if statements
    if (val < 10 || val > 20) {
        return "Outside"
    }

    // Only change code above this line
    return "Inside"
}

// Change this value to test
testLogicalOr(15);