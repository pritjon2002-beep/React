import "./Product.css";

function Product({title = "Heading" , description , lists}) {
    let styles = {backgroundColor : description.length > 18 ? "red" : null }
  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      {description.length > 18 ? <h2> <u>{description}</u> </h2> : <h2> {description} </h2> }
      <h3>{lists.map((para) => <li>{para}</li>)}</h3>
    </div>
  );
}

export default Product;
