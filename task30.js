"use strict";
let database = ['Jamal', 'HyperX', 'Admin', 'Ali', 'Muhammad Ali'];
database.map((user) => {
    user == "Admin"
        ? console.log("Hello Admin, would you like to see a status report?")
        : console.log("Hi " + user + ", thank you for logging in again");
});
database = [];
if (!!database.length) {
    console.log("We need to find some users!");
}
