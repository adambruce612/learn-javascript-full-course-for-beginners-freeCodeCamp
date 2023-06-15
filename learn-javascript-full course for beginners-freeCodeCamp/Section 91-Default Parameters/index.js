// Default parameters allow you to create more flexible functions - the default parameter kicks in when the argument is not specified or is undefined.
const increment = (function() {
    return function increment(number, value) {
        return numbert + value;
    };
})();

// Re-written with 1 as the default parameter for value
const increment = (function() {
    return function increment(number, value = 1) {
        return numbert + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));