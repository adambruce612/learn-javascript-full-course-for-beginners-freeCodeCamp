// When using else-if statements order is very important - the code below will return "Less than 10" when passed an 
// argument of 3 due to it returning true on the first if statement. Once the first condition is met it quits checking.
// function orderMyLogic(val) {
//     if (val < 10) {
//         return "Less than 10";
//     } else if (val < 5) {
//         return "Less than 5";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }
// In order for the correct string to be returned the else-if statements need to be swapped to be in the logical order
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}


//Change this value to test
console.log(orderMyLogic(3));