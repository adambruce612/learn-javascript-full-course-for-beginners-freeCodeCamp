// It's common in JavaScript to iterate through the contents of an array
// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

// The .length method starts counting at 1 versus zero like the array does, so .length will be one more than the array counting, ensure the for loop has an exit condition.
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

// Setup
var myArr = [2, 3, 4, 5, 6];
var total = 0;

// Add up all the numbers in the myArr array
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);