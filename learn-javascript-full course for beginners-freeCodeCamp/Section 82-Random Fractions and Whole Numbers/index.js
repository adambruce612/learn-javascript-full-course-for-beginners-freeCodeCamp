// Math.random() function will allow you to create a random number
/*****GENERATE RANDOM FRACTION*****/
function randomFraction() {
    return Math.random(); // This will create a random number between 0 and 1 (it will never actually hit 1).
}

console.log(randomFraction());

/*****GENERATE RANDOM WHOLE NUMBERS*****/
// Math.floor will create a random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // This will round down to the nearest whole number

function randomWholeNum() {

    return Math.floor(Math.random() * 10); // Will return a random number between 0 and 9
}

console.log(randomWholeNum());

/*****GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE*****/
// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);