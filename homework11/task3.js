async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await response.json();
}

async function fetchAll() {
    const results = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("all results:", results[0], results[1]);
}

async function fetchFirst() {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("first result:", result);
}

fetchAll();
fetchFirst();
