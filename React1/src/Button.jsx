function handleClick() {
  console.log("Clicked");
}

function handleHover() {
    console.log("Hovered");
  }

  
export default function Button() {
  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleHover}>Click Me </button>
      <p onMouseOver={handleHover} style={{color:"white"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        maiores assumenda nostrum laborum, saepe obcaecati, distinctio a
        voluptatum ipsam consequatur tenetur earum! Ipsa voluptatum vero vel
        repellat corrupti unde? Libero.
      </p>
    </div>
  );
}
