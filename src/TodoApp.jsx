import { useState, useEffect } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Aditya", "ridu"]);

  function addTodos() {
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
  }

  return (
    <div>
      <h1>Best Todo App Till now</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      ></input>
      <button onClick={addTodos}>Add</button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
