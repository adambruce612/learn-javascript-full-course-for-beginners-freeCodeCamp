// Template literals are a special type of string that makes creating complex strings easier. The are created using the backticks ``. 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
// Template literals will show line seperations, you can use single or double quotation marks in the string without escaping, and you can put variables right in the string.
// ${variable} is how to add a variable to a template literal. 
const greeting = `Hello, my name is ${person.name}!
I am a ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = null;
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return resultDisplayArray;
}

/** 
* makeList(result.failure) should return:
* `<li class="text-warning">no-var</li>`
* `<li class="text-warning">var-on-top</li>`
* `<li class="text-warning">linebreak</li>`
**/

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)
