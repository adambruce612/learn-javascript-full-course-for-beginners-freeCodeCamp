// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName" : "Laine",
        "number": "0873236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName" : "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName" : "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "violin"]
    },
    {
        "firstName": "Kristian",
        "lastName" : "Vos",
        "number": "unkown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// Create a lookUpProfile function where we pass in a name and a property and it will return the value of that property. If the name passed in does not correspond to any contacts
// the function should return "No such contact" and if no property it should return "No such property".
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No Such Contact"
}

// Change these values to test your function
var data = lookUpProfile("Sherlock", "lastName");

console.log(data);