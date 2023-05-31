// Similar to the push() function but unshift() adds an element to the beginning of an array rather than the end
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // removes ["John", 23] from myArray

// Only change code below this line.
myArray.unshift(["Paul", 35]); //myArray is now [["Paul", 35], ["dog", 3]]
