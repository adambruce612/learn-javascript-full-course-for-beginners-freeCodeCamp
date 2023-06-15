// The spread operator looks just like the rest operator (...) but it expands an already existing array - or spreads out an array into its individual parts.
// You can only use the spread operator in an argument to a function or to an array literal
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//     arr2 = arr1; // change this line
//     arr1[0] = 'potato'
// })();
// console.log(arr2);

// Re-written using the spread operator to spread out arr1.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; // change this line
    arr1[0] = 'potato'
})();
console.log(arr2);