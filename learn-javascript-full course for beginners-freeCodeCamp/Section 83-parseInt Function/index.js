// The parseInt function takes a string and returns an integer - if the string can not be converted to an integer
// it returns NaN for not a number.
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

/*****USE THE PARSEINT FUNCTION WITH A RADIX*****/
// The parseInt() function can also be used with a radix.The radix specifies the base number in the string - such as base
//2, base 7, or base 8. Base 2 would be binary. The default is base 10.
function convertToInteger() {
    return parseInt(str, 2); // The second argument tells the computer that is is a binary number.
}

console.log(convertToInteger("10011"));