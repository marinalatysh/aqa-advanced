let person = {
    firstName: "Marina",
    lastName: "Latysh",
    age: 27
};

person.email = "marina.latysh@example.com";
delete person.age;

console.log(person);