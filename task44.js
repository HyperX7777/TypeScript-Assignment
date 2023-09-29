"use strict";
let sandwich_fillings = (...Items) => {
    console.log("A sandwich ordered with items: ");
    items.map((item) => console.log(item));
};
let items = ['Chicken Tikka', 'Mushrooms', 'Olives', 'Cucumber', 'Onion', 'Cheese', 'BBQ Sauce', 'Mustard', 'Mayo'];
sandwich_fillings(...items);
items = ['Chicken BBQ', 'Mushrooms', 'Olives', 'Cucumber', 'Onion', 'Double Cheese', 'BBQ Sauce', 'Honey Mustard', 'Olive Oil'];
sandwich_fillings(...items);
