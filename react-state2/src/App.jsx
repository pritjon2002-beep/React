import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Ticket from "./Ticket";

function App() {
  return (
    <div>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      {/* <Lottery /> */}
      <Ticket ticket = {[0,2,3]} />
      
    </div>
  );
}

export default App;
