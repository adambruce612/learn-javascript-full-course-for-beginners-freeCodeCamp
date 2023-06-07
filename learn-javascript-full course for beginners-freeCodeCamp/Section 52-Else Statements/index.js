// Else statements can be used to execute different code when an if statement does not come back true
function testElse(val) {
    var result = "";
    // Only change code below this line

    // if (val > 5) {
    //     result = "Bigger than 5";
    // }

    // if (val <= 5) {
    //     result = "5 or Smaller";
    // }

// A better way to code the if statements above using the else statement
if (val > 5) {
    result = "Bigger than 5";
} else {
    result = "5 or Smaller";
}

    // Only change code above this line
    return result;
}

// Change this value to test
testElse(4);