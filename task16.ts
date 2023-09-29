var invitation_to = ['Ibrahim Kamal', 'Hunain Dar', 'Hasnat Afzal', 'Saqlain Bhatti'];

console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');

console.log(invitation_to[3], 'cannot make it to the dinner.')

invitation_to.pop();

invitation_to.push('Mana G');

console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');

console.log('We found a bigger dinner table')

invitation_to.unshift('Chiba') // Add beginning of the array
invitation_to.splice(3, 0, 'Shahmir'); // Add in mid of array
invitation_to.push('Bakra'); // Add in end of array

console.log('Hey ' + invitation_to[0] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[1] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[2] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[3] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[4] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[5] + ', I would like to invite you to a dinner.');

console.log('Hey ' + invitation_to[6] + ', I would like to invite you to a dinner.');