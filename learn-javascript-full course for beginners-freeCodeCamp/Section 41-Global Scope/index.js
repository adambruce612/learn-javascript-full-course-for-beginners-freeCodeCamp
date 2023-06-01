// Scope refers to the visiblity of variables
// Variables which are defined outside of a function block have a global scope (can be seen everywhere in your JavaScript code)

// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobabl Here
    oopsGlobal = 5; //if var keyword was used the variable would be locally scoped (only available inside this function)
    // Since the var keyword is not used, the variable has global scope
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();