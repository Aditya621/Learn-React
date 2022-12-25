import { useState, useEffect } from "react";

let globalId = 0;

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  // Delete Items
  function deleteItem(id) {
    setTodos((oldTodos) => oldTodos.filter((items) => items.id !== id));
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
        {todos.map((items) => {
          return (
            <div>
              <li>
                {items.todo} ({items.id})
              </li>
              <button onClick={() => deleteItem(items.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
