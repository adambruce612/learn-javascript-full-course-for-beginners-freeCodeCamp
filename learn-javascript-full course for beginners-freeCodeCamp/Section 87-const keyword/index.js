// Const is another way to delcare a variable. It has all the features of let but is read-only. You cannot reassign a const.
// If you know for sure that you don't want to reassign a variable you should use const. 
function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool!"; // If changed to const you can not reassign-so if reassigned this would throw an error.
    // Ex. const SENTENCE = str + " is cool." - using uppercase for const name is considered best practice"
    sentence = str + " is amazing!";

    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }

}
printManyTimes("freeCodeCamp");