import { useSelector } from "react-redux";
import { useState } from "react";
import { FloatingInput } from "../components/admin";
import { v4 as uuidv4 } from "uuid";

const Dummy = () => {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState([]);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  // Submitting form input
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!editTodo) {
      if (input) {
        setTodos((prev) => {
          return [...prev, { id: uuidv4(), title: input, completed: false }];
        });
        setInput("");
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  // Edit
  const onEditHandler = (id) => {
    const find = todos.find((todo) => {
      return todo.id === id;
    });
    setEditTodo(find);
    setInput(find?.title);
  };

  // updating form input
  const updateTodo = (title, id, completed) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });

    setTodos(updatedTodo);
    setInput("");
    setEditTodo("");
  };

  return (
    <div className="py-10 items-center justify-center flex">
      <div className="py-10">
        <form onSubmit={onSubmitHandler}>
          <FloatingInput
            placeHolder="Enter something"
            value={input}
            name="input"
            onChange={onChangeHandler}
          />
          <button className="border p-2"> Summit</button>
        </form>

        <div className="py-10">
          <h1>To do list</h1>

          <div className="border py-5">
            {todos.map((todo) => {
              return (
                <li key={todo?.id}>
                  <input
                    type="text"
                    value={todo?.title}
                    onChange={(e) => e.preventDefault()}
                    className="py-3"
                  />

                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      onEditHandler(todo?.id);
                    }}
                  >
                    Edit
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dummy;
