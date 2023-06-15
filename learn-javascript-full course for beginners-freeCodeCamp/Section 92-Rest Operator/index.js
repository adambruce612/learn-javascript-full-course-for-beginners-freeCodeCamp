// // The rest operator allows you to create a function that takes a variable number of arguments
// const sum = (function() {
//     return function sum(x,y,z) {
//         const args = [ x, y, z ];
//         return args.reduce((a,b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3));

// Re-written using the rest operator
const sum = (function() {
    return function sum(...args) {
        const args = [ x, y, z ];
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));