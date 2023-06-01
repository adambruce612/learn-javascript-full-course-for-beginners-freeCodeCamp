// Variables which are declared within a function as well as the function parameters have a local scope.
// They are only visible from within the function

function myLocalScope() {
    myVar = 5; // Only visible inside the function
    console.log(myVar);
}

myLocalScope();

// console.log(myVar); Cannot be run since myVar is local scoped