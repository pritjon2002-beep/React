import { useState } from "react"

export default function TodoList(){
    const[todos , setTodos] = useState(["sample task"]);
    return(
        <div>
            <input type="text" name="" id="" />
            <button>Add Task</button>
            <br />
            <hr />
            <br />
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>{
                        return<li> {todo} </li>
                    })
                }
            </ul>
        </div>
    )
}