import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import TicketNum from "./TicketNum";

function App() {
  return (
    <div>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      {/* <Lottery /> */}
      <TicketNum num={5} />
      <TicketNum num={5} />
      <TicketNum num={5} />
    </div>
  );
}

export default App;
