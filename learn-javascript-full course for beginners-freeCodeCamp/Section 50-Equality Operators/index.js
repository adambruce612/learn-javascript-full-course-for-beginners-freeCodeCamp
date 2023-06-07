// *****EQUALITY OPERATOR*****
// Many comparison operators will return a boolean value, the most common being the equality operator.
// Setup
function testEqual(val)  {
    if (val == 12) { // Has to be double as the single equal sign is the assignment operator
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testEqual(10));

//*****STRICT EQUALITY OPERATOR*****
// == is the equality operator (JavaScript attemps to convert both values being compared to a common type)
// === is the strict equality operator (JavaScript does not do the type conversion)
// Setup
function testStrict(val) {
    if (val) {
        return "Equal";
    } 
    return "Not Equal";
}

// Change this value to test
testStrict(10);

/* 
3 == 3 true
3 == '3' true
3 === '3' false
*/
 //*****EQUALITY OPERATOR PRACTICE
// Setup
function compareEquality(a, b) {
    if (a == b) { // Change this line (swap out == for ===)
        return "Equal";
    } 
    return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));

//*****COMPARISON WITH THE INEQUALITY OPERATOR*****
//!= is the inequality operator, which checks to see if something is not true. The inequality operator does type conversion like the equality operator.
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    } 
    return "Equal";
}

//Change this value to test
console.log(testNotEqual(10));

//*****COMPARISON WITH THE STRICT INEQUALITY OPERATOR*****
// The strict inequality operator is basically the opposite of the strict equality operator. 
// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {
        
        // Only Change Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

//*****COMPARISON WITH THE GREATER THAN OPERATOR*****
function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10));

//*****COMPARISON WITH THE GREATER THAN OR EQUAL OPERATOR*****
function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10));

//*****COMPARISON WITH THE LESS THAN OPERATOR*****
function testLessThan(val) {
    if (val < 25) { // Change this line
        return "20 or Over";
    }

    if (val < 55) { // Change this line
        return "10 or Over";
    }

    return "55 Or Over";
}

// Change this value to test
console.log(testLessThan(10));

//*****COMPARISON WITH THE LESS THAN OR EQUAL OPERATOR*****
function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More than 24";
}

// Change this value to test
console.log(testLessOrEqual(10));