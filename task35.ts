let pets = ["Dog", "Cat", "Horse"];

pets.map((pet: string) => {
    pet === "Dog"
      ? console.log(`A ${pet} would be a great animal for security.`)
      : pet === "Cat"
      ? console.log(`A ${pet} is a very cute animal.`)
      : pet === "Horse"
      ? console.log(`A ${pet} is a very great animal for riding.`)
      : console.log(`Unknown pet: ${pet}`);
});

console.log(`All these pets have four legs.`)