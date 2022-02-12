const baseURL = `${process.env.REACT_APP_API_URL}/todos`;

export const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: "DELETE",
    }) .then((res) => res.json())
}

