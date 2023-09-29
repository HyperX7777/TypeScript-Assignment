let sandwich_fillings = (...Items: Array <string>) => {
    console.log("A sandwich ordered with items: ");
    items.map((item: string) => console.log(item));
};

let items: Array<string> = ['Chicken Tikka', 'Mushrooms', 'Olives', 'Cucumber', 'Onion', 'Cheese', 'BBQ Sauce', 'Mustard', 'Mayo'];
sandwich_fillings(...items);
items = ['Chicken BBQ', 'Mushrooms', 'Olives', 'Cucumber', 'Onion', 'Double Cheese', 'BBQ Sauce', 'Honey Mustard', 'Olive Oil'];
sandwich_fillings(...items);