// Functions CAN have return statements but that don't have to. 
// If you don't assign a return value the returned value is undefined
// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

// If you were to log out either function it would log out undefined since no return value is set
console.log(addThree());
console.log(addFive());