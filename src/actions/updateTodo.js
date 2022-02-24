// const baseURL = `${process.env.REACT_APP_API_URL}/todos`;

// export const updateTodo = (todo) => {
//     return fetch(`${baseURL}/${todo.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             id: todo.id,
//             title: todo.title,
//             completed: todo.completed
//         })
//         .then((res) => res.json())
//     })
// }