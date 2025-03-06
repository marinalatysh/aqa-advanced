let car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

let car2 = {
    brand: "Mazda",
    model: "3",
    owner: "Marina"
};

let car3 = { ...car1, ...car2 };
console.log(car3);
