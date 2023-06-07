// If you have multiple conditions that need to be addressed you can use else if statements - a way of chainging if statements together
function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
// }

//     if (val < 5) {
//         return "Smaller than 5";
// }

//     return "Between 5 and 10";
// }

// A better way to write the code above using else-if statements
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);