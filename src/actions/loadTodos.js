const baseURL = `${process.env.REACT_APP_API_URL}/todos`;

const = loadTodos = () => {
    return fetch(baseURL).then((res) => res.json())
}