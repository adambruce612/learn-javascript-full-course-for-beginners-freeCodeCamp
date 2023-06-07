function testSize(num) {
 if (num < 5) {
    return "Tiny";
 } else if (num < 10) {
    return "Small";
 } else if (num < 15) {
    return "Medium";
 } else if (num < 20) {
    return "Large";
 } else {
    return "Huge";
 }
}

console.log(testSize(7));

/*
Write chained if/else if statements to fullfill the following condtions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

*/