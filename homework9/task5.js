let users = [
    { name: "Анна", email: "anna@example.com", age: 26 },
    { name: "Марина", email: "marina@example.com", age: 27 },
    { name: "Вікторія", email: "viktoria@example.com", age: 22 }
];

for (let { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
