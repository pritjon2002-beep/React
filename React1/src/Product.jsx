import Price from "./Price";
import "./Product.css";


function Product({title , description}) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <Price  />
    </div>
  );
}

export default Product;
