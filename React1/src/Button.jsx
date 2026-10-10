function handleClick() {
  console.log("Clicked");
}

function handleHover() {
    console.log("Hovered");
  }

function handleDoubleClick() {
    console.log("DoubleClicked");
  }

  
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me </button>
      <p onMouseOver={handleHover} onDoubleClick={handleDoubleClick} style={{color:"white"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        maiores assumenda nostrum laborum, saepe obcaecati, distinctio a
        voluptatum ipsam consequatur tenetur earum! Ipsa voluptatum vero vel
        repellat corrupti unde? Libero.
      </p>
    </div>
  );
}
