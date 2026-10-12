import { useState } from "react"

export default function TodoList(){
    const[todos , setTodos] = useState([]);
    const[newTask, setNewTask] = useState("");

       let todoTask = ()=>{
        setTodos([...todos,newTask]);
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
                    todos.map((todo , index)=>{
                        return <li key={index}> {todo} </li>
                    })
                }
            </ul>
        </div>
    )
}