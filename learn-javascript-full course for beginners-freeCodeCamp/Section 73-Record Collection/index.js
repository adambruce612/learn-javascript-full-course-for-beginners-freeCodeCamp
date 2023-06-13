// Setup
var collection = {
    "2548": {
        "artist": "Slippery When Wet",
        "album": "Bon Jovi",
        "tracks": ["LetIt Rock", "You Give Love a Bad Name"]
    }, 
"2468": {
    "artist": "1999",
    "album": "Prince",
    "tracks": ["1999", "Little Red Corvette"]
},
"1245": {
    "artist": "Robert Palmer",
    "tracks": []
},
"5439": {
    "album": "ABBA Gold"
}
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below  this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));
