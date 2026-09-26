import "./Product.css";

function Product({title = "Heading" , description , lists}) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{lists}</h3>
    </div>
  );
}

export default Product;
