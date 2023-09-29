// Stripping Names = The \n is used to bring the text to next line and  the \t is used to add spaces on left and right of the text

// Store the name with whitespace characters

let name2 = "\tJohn Doe";
let name3 = "\nJohn Doe";

let name1 = "\t\nJohn Doe";

// Print the name with whitespace

console.log("Name with whitespace:");
console.log(name1);
console.log(name2);
console.log(name3);

// Strip the whitespace and print the name

let strippedName1 = name1.trim();
let strippedName2 = name2.trim();
let strippedName3 = name3.trim();

console.log("\nName after stripping whitespace:");

console.log(strippedName1);
console.log(strippedName2);
console.log(strippedName3);