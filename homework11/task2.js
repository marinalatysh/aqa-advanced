function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            return response.json();
        });
}

function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            return response.json();
        });
}

const allData = Promise.all([fetchTodo(), fetchUsers()])
    .then(results => console.log("all results:", results))
    .catch(error => console.error("error: ", error));

const firstResolved = Promise.race([fetchTodo(), fetchUsers()])
    .then(result => console.log("first result:", result))
    .catch(error => console.error("error: ", error));


fetchTodo().then(console.log);
fetchUsers().then(console.log);
