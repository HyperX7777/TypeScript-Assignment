"use strict";
const magicians2 = ["Jadu", "Manji wala Peer", "HyperX"];
const show_magicians2 = (magicians3) => {
    magicians3.map((magician4) => {
        console.log(magician4);
    });
};
const make_great2 = (magicians3) => {
    const array = [];
    magicians2.map((name) => {
        array.push("The Great " + name);
    });
    return array;
};
let new_array = make_great2(magicians2);
console.log("Original: ");
show_magicians2(magicians2);
console.log("New Array: ");
show_magicians2(new_array);
