import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    const[todos , setTodos] = useState([{task:"sample task", id:uuidv4()}]);
    const[newTask, setNewTask] = useState("");

       let todoTask = ()=>{
        setTodos([...todos,{task:newTask, id:uuidv4()}]);
        setNewTask("");
    }

    let inputTodo = (event)=>{
        setNewTask(event.target.value);

    }


    return(
        <div>
            <input type="text" value={newTask} onChange={inputTodo} />
            <button onClick={todoTask}>Add Task</button>
            <br />
            <hr />
            <br />
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li key={todo.id}> {todo.task} </li>
                    })
                }
            </ul>
        </div>
    )
}