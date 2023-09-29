let show_magicians1 = (magicians1: string[]) => {
    magicians1.map((magician1) => {
    console.log(magician1);
  });
};
let magicians1 = ["Jadu", "Manji wala Peer", "HyperX"];
show_magicians1(magicians1);

const make_great = (magicians1: string[]) => {
    magicians1.map((name: string, index: number) => {
      magicians1[index] = "The Great " + name;
    });
};

make_great(magicians1);
show_magicians1(magicians1);