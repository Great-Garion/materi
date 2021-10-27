import { useState, useEffect } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState(["belajar react", "belajar state"]);
  const [inputTodo, setInputTodo] = useState("");

  const handleChange = (event) => {
    setInputTodo(event.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault()
    // cara 1
    // setTodos([
    //   ...todos,
    //   inputTodo
    // ])

    // cara 2
    let newTodo = [...todos];
    newTodo.push(inputTodo);
    setTodos(newTodo);

    setInputTodo("")
  };

  const deleteTodo = (todo) => {
    // console.log("tess");
    console.log(todo);
    let newTodos = todos.filter((item) => item !== todo);

    setTodos(newTodos);
  };

  useEffect(() => {
    console.log("tess");

    return () => {
      console.log("clean up");
    }
  },[todos]);

  return (
    <div>
      <Container className="my-4">
        <Form onSubmit={addTodo}>
          <Form.Group
            className="d-flex mb-3 w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className="me-3"
              type="text"
              placeholder="new todo"
              value={inputTodo}
              onChange={handleChange}
            />

            <Button
              className="flex-shrink-1"
              variant="primary"
              onClick={addTodo}
            >
              Add
            </Button>
          </Form.Group>
        </Form>

        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item className="d-flex justify-content-between" key={index}>
              <h2>{todo}</h2>
              <Button variant="danger" onClick={() => deleteTodo(todo)}>
                X
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default Todo;
