import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Title from "./Title.jsx";
import MessageBox from "./MsgBox.jsx";

function App() {
  return (
    <>
    <div>
      <Title />
    </div>

     <div>
        <MessageBox userName="Pritam" textColor="Red" />
        <MessageBox userName="Priya" textColor="Blue" />
        <MessageBox userName="Dd" textColor="Yellow" />
      </div>

    <div>
      <ProductTab />
    </div>
    </>
  );
}

export default App;
