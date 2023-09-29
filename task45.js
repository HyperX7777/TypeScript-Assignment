"use strict";
const car_object = (manufacturer, model, ...args) => {
    // Initialize an empty object named 'car' with 'manufacturer' and 'model' properties
    let car = { manufacturer, model };
    // Iterate over the 'args' using Object.entries
    Object.entries(args).map(([key, value]) => {
        // Spread the 'value' object into the 'car' object
        car = { ...car, ...value };
    });
    // Return the 'car' object
    return car;
};
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
