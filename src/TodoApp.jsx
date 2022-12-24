import { useState, useEffect } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Aditya", "ridu"]);

  function addTodos(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, task];
    });
  }

  // for enter the stuff
  function tryEnter(e) {
    if (e.keyCode === 13) {
      addTodos();
    }
  }

  return (
    <div>
      <h1>Best Todo App Till now</h1>
      <form onSubmit={addTodos}>
        <input
          // onKeyDown={tryEnter}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
