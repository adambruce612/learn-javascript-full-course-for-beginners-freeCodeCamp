// In computer science a queue is an abstract data structure where items are kept in order


//Adds an items to the array and then returns the first item on the list
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));