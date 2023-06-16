// ES6 has support for easily defining object literals
// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };

// };

// console.log(createPerson("Zodiac Hasbro", 56, male))

// A more DRY way to write the code above:
const createPerson = (name, age, gender) => ( { name, age, gender });

console.log(createPerson("Zodiac Hasbro", 56, male))