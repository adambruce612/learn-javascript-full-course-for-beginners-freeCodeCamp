// In order to access sub-properties of an object you can chain together the dot or bracket notation
// Setup 
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack"
        } 
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(gloveBoxContents);
