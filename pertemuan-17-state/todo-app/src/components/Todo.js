import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState(["belajar react", "belajar state"]);
  const [inputTodo, setInputTodo] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    // cara langsung
    setInputTodo(event.target.value)

    // cara destruktur
    // let {value} = event.target
    // setInputTodo(value)
  }

  const addTodo = () => {
    // cara 1
    // setTodos([
    //   ...todos,
    //   inputTodo
    // ])

    // cara 2
    let newTodo = [...todos]
    newTodo.push(inputTodo)
    setTodos(newTodo)
  }

  console.log(inputTodo);

  return (
    <div>
      <input type="text" name="" id="" onChange={handleChange} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
