// It's possible to have both local and global variables with the same name.
// When both local and global variables have the same name, the local variable takes precedent over the global variable

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit()); // Logs "sweater" because of the local variable
console.log(outerWear); // Logs "T-shirt" because of the global variable