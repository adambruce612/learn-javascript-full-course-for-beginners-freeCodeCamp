/* For a long time in JavaScript if you were going to declare a variable you had to use the var keyword.
Starting with ES6 in 2015 you can now declare variables with let and const as well.
One difference is that let does not allow you to declare variables twice.s
*/

/*****DIFFERENCE BETWEEN THE VAR AND LET KEYWORDS*****/
// var catName = "Quincy";
// var quote;

// var catName = "Beau";

// function catTalk() {
//     "use strict";

//     catName = "Oliver";
//     quote + catName + "says Meow!";
// }

// catTalk();

// Using the let keyword looks like this:
let catName = "Quincy";
let quote;

/*let*/ catName = "Beau"; // Creates an error since catName variable was declared already. You can re-assign variables still.

function catTalk() {
    "use strict"; // Enables strickt mode which catches common coding mistakes and unsafe actions - like if you create
    //a variable and don't declare it with var, let or const.

    catName = "Oliver";
    quote + catName + "says Meow!";
}

catTalk();

/*****COMPARE SCOPES OF THE VAR AND LET KEYWORDS*****/
/* Another difference between var and let is that when you declare var is it declared globally or locally if declared 
inside a function. The scope of let is limited to the block statement or expression that it was declared in.
A block of code is anything inside the curly brackets {}.
*/ 
function checkScope() {
    "use strict";
    /*var*/ let i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i); // Will still be "block scope" if var keyword is used when declaring variable.
    // i will be "function scope" if variable is declared with the let keyword.
    return i;
}

checkScope();