// const baseUrl = "http://localhost:3000/todos";
// const baseUrl = "localhost:3000/todos"; ??

// const baseURL = `${process.env.REACT_APP_API_URL}/todos`;
// export const loadTodos = () => {
//   // console.log("Hi")
//   return fetch(baseUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

const baseUrl = "http://localhost:3000/todos";

// export const loadTodos = () => {
//   // console.log("Hi")
//   return fetch(baseUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

export const getTodo = () => {
  return fetch(`${baseUrl}\${id}`).then((res) => res.json());
};


export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    },
  }).then((res) => res.json());
};


