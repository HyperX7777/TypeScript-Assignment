const car_object = (manufacturer: string, model: string, ...args: any) => {
    // Initialize an empty object named 'car' with 'manufacturer' and 'model' properties
    let car: any = { manufacturer, model };
    
    // Iterate over the 'args' using Object.entries
    Object.entries(args).map(([key, value]) => {
      // Spread the 'value' object into the 'car' object
      car = { ...car, ...(value as Object) };
    });
    
    // Return the 'car' object
    return car;
};
  
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));