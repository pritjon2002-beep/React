import "./App.css";
import { sum } from "./helper";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";


function App() {
  let winCondition = (ticket)=>{
      // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0]=== 0;
  }
  return (
    <div>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      <Lottery n={2} winCondition={winCondition} />
      
      
    </div>
  );
}

export default App;
