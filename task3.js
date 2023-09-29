"use strict";
// Solution # 1
// Lowercase
let personNameLower = "muhammad ali";
console.log(personNameLower);
// Uppercase
let personNameUpper = "MUHAMMAD ALI";
console.log(personNameUpper);
// Titlecase
let personNameTitle = "Muhammad Ali";
console.log(personNameTitle);
// Solution # 2 (More accurate)
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let naam = "mUhaMMad aLI";
console.log(`Hello ${naam.toLowerCase()}, would you like to learn some Python today?`);
console.log(`Hello ${naam.toUpperCase()}, would you like to learn some Python today?`);
const titleCase = naam
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);
