export default function Price({oldPrice,newPrice,idx}) {
  return (
    <>
      <p style={{backgroundColor:"orange", padding : "1rem" }}><span style={{marginRight:"1rem",  textDecoration:"line-through"}}>{oldPrice[idx]}Rs/</span>  {newPrice[idx]}Rs/</p>
    </>
  );
}
