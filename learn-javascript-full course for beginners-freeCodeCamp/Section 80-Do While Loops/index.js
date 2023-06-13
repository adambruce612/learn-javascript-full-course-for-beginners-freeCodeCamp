// While loops first checks the condition before it runs any code within the loop
// Do while loops will always run at least the first time and then check the condition
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
// Will not run since it checks the condition first
while (i < 5) {
    myArray.push(i);
    i++;
}

// Will run once, adding 10 to the array but will then break out of the loop since i will be equal to 11
do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);