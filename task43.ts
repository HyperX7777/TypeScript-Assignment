const magicians2 = ["Jadu", "Manji wala Peer", "HyperX"];
const show_magicians2 = (magicians3: Array<string>) => {
  magicians3.map((magician4) => {
    console.log(magician4);
  });
};
const make_great2 = (magicians3: Array<string>) => {
  const array: Array<string> = [];
  magicians2.map((name) => {
    array.push("The Great " + name);
  });
  return array;
};
let new_array: Array<string> = make_great2(magicians2);
console.log("Original: ");
show_magicians2(magicians2);
console.log("New Array: ");
show_magicians2(new_array);