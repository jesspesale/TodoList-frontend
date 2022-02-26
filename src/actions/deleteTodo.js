const baseURL = "http://localhost:3000/todos"

export const deleteTodo = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

