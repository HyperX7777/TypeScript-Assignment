"use strict";
var invitation_to = ['Ibrahim Kamal', 'Hunain Dar', 'Hasnat Afzal', 'Saqlain Bhatti'];
console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');
console.log(invitation_to[3], 'cannot make it to the dinner.');
invitation_to.pop();
invitation_to.push('Mana G');
console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');
console.log('We found a bigger dinner table');
invitation_to.unshift('Chiba'); // Add beginning of the array
invitation_to.splice(3, 0, 'Shahmir'); // Add in mid of array
invitation_to.push('Bakra'); // Add in end of array
console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[4] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[5] + ', I would like to invite you to a dinner.');
console.log('Hey ' + invitation_to[6] + ', I would like to invite you to a dinner.');
console.log("We can invite only 2 people now because the dinner table won't arrtive in time.");
// Removing 5 people so 2 can remain
console.log("Sorry I can't invite you to the dinner " + invitation_to[6]);
invitation_to.pop();
console.log("Sorry I can't invite you to the dinner " + invitation_to[5]);
invitation_to.pop();
console.log("Sorry I can't invite you to the dinner " + invitation_to[4]);
invitation_to.pop();
console.log("Sorry I can't invite you to the dinner " + invitation_to[3]);
invitation_to.pop();
console.log("Sorry I can't invite you to the dinner " + invitation_to[2]);
invitation_to.pop();
console.log('Hey ' + invitation_to[0] + ", You're still invited.");
console.log('Hey ' + invitation_to[1] + ", You're still invited.");
invitation_to.pop();
invitation_to.pop();
console.log(invitation_to);
