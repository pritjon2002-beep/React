import "./Product.css";

function Product({title = "Heading" , description}) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default Product;
