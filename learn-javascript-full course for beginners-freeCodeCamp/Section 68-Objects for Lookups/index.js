// Objects can be thought of as a key value storage like a dictionary. You can use an object to look up values.

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    //This switch statement can be changed to an object
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"

    };
    result = lookup[val];
    // switch(val) {
    //     case "alpha":
    //         result = "Adams";
    //         break;
    //     case "bravo":
    //         result = "Boston";
    //         break;
    //     case "charlie":
    //         result = "Chicago";
    //         break;
    //     case "delta":
    //         result = "Denver";
    //         break;
    //     case "echo":
    //         result = "Easy";
    //         break;
    //     case "foxtrot":
    //         result = "Frank";
    //         break;
    // }
    // Only change code above this line
    return result
}

// Change this value to test
console.log(phoneticLookup("charlie"));