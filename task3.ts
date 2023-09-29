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

let naam: string = "mUhaMMad aLI";

console.log(
  `Hello ${naam.toLowerCase()}, would you like to learn some Python today?`
);

console.log(
  `Hello ${naam.toUpperCase()}, would you like to learn some Python today?`
);

const titleCase = naam
.split(" ")
.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
.join(" ");

console.log(`Hello ${titleCase}, would you like to learn some Python today?`);

// The Split is used for splitting the name into array with a space
// The map will create a new array and loop through each word of naam
// and split it into a separate word then it'll make the first word
// to uppercase which will capitalize the first word and then the
// word.slice will take rest of the word from index 1 onward and convert it to
// lowercase. The after the words are processed the join will join the words