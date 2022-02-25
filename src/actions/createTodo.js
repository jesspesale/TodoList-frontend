const baseUrl = "http://localhost:3000/todos";

export const createTodo = (todo) => {
  console.log(todo);
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: todo,
      completed: false,
    }),
  }).then((res) => res.json());
};
