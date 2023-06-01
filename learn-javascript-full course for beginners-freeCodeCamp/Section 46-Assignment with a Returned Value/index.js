// You can assign returned values to variables
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10); // Assigns the returned value to the changed variable

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7); // Assigns the returned value to the processed variable