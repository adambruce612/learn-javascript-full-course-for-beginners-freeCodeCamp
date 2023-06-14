// You can next ternary (or conditional) operators within each other.
// Write a function that returns the string "positive" if the argument is postive, "negative" if the argument is negative,
// or zero using a nested conditional operator. 
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));