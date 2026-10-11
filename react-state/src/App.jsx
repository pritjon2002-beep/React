import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>State in React</h1>
      <Counter></Counter>
    </>
  );
}

export default App;
