import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";


function App() {
  return (
    <div>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      <Lottery n={4} winningSum={15} />
      
      
    </div>
  );
}

export default App;
