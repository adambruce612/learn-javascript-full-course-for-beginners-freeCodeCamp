// Instead of using chained if-else statements you could use a switch statement.
// A switch statement tests a value and can have many case statements which define various possible values
// Switch statements use the strict equality operator when comparing the argument passed in to the case.
/*****SWITCH STATEMENT*****/
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
    }
    return answer;
}

// Change this value to test
console.log(caseInSwitch(3));

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4- "delta"
*/

/*****DEFAULT OPTION IN SWITCH STATEMENT*****/
// Switch statements have a default option like an else statement. 
// Without a default value anything passed in instead of "a", "b", or "c" will have an empty string returned
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// Change this value to test
console.log(switchOfStuff("a"));

/*****Multiple Identical Options in Switch Statements*****/
// With a switch statement, multiple inputs can have the same output by omitting the break keyword
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    return answer;
}

// Change this code to test
console.log(sequentialSizes(1));

/*****REPLACE IF ELSE CHAINS WITH SWITCH*/
// Sometimes Switch statements can be easier to read and understand than if-else statements
// function chainToSwitch(val) {
//     var answer = "";
//     // Only change code below this line

//     if (val === "bob") {
//         answer = "marley"
//     } else if (val === 42) {
//         answer = "The Answer";
//     } else if (val === 1) {
//         answer = "There is no #1";
//     } else if (val === 99) {
//         answer = "Missed me by this much!";
//     } else if (val === 7) {
//         answer = "Ate Nine";
//     }

//     // Only change code above this line
//     return answer;
// }

// Change the chain of else-if statements above to switch statements
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    
    switch (val) {
        case "bob":
            answer = "marley"
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}
