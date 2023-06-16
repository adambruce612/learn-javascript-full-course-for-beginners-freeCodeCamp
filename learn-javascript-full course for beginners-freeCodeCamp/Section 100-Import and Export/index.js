// In the past people would use the require function to import functions and code from other files. Now we have import/export where you can export code in one file and
// import it in another file. It also allows you to only input certain functions and/or variables from a file.
import { capitalizeString } from "./string_function"; //file name does not need extension as the .js is assumed

const cap = capitalizeString("hello!");

console.log(cap);

/*****USE EXPORT TO REUSE A CODE BLOCK******/
// You export functions and variables from one file so that you can import them into another file
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slicer(1);

    const foo = "bar";
    const bar = "foo";
}