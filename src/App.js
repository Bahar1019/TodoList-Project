import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);

  function changeHandler(e) {
    setTodo(e.target.value);
  }

  function addTodos() {
    if (todo !== "") {
      setAddTodo([...addTodo, todo]);
      setTodo("");
    }
  }

  function deleteTodo(text) {
    const newTodo = addTodo.filter((todo) => {
      return todo !== text;
    });
    setAddTodo(newTodo);
  }
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new ToDo"
          onChange={changeHandler}
        ></input>
        <button className="add-button" onClick={addTodos}>
          Add
        </button>
      </div>
      {addTodo?.length > 0 ? (
        <ul>
          {addTodo.map((todo, index) => (
            <div className="todo">
              <li key={index}>{todo}</li>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p> No Tasks </p>
        </div>
      )}
    </div>
  );
}

export default App;
