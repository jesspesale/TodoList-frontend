const baseURL = `${process.env.REACT_APP_API_URL}/todos`;

export const createTodo = (todo) => {
    return fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        })
        .then((res) => res.json())
    })
}