import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  const [inpTask, setInpTask] = useState("");

  let inputTask = (event) => {
    setInpTask(event.target.value);
  };

  let addTask = () => {
    if(inpTask.trim() === "") return;
    setTodos((prevTask) => {
      return [...prevTask, { task: inpTask, id: uuidv4() }];
    });
    setInpTask("");
  };

  let deleteTask = (id) => {
    setTodos((prevTask) => {
      return prevTask.filter((todo) => todo.id !== id);
    });
  };

  let toUpperCaseAll = () => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let toLowerCaseAll = () => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTask) => {
      return prevTask.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  let lowerCaseOne = (id)=>{
    setTodos((prevTask)=>{
        return prevTask.map((todo)=>{
            if(todo.id === id ){
                return{
                    ...todo,
                    task: todo.task.toLowerCase()
                }
            }else{
                return todo
            }
        })
    })
  }

  return (
    <div>
      <input type="text" value={inpTask} onChange={inputTask} />
      <button onClick={addTask}>Add Task</button>
      <br />
      <hr />
      <br />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span> {todo.task}</span> &nbsp; &nbsp;{" "}
              <button onClick={() => deleteTask(todo.id)}>delete</button> &nbsp; &nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>&nbsp; &nbsp;
              <button onClick={() => lowerCaseOne(todo.id)}>lowercase</button>&nbsp; &nbsp;
            </li>
          );
        })}
      </ul>

      <button onClick={toUpperCaseAll}>UPPERCASEALL</button>&nbsp;&nbsp;&nbsp;
      <button onClick={toLowerCaseAll}>lowercaseall</button>
    </div>
  );
}
