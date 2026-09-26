import "./Product.css";

function Product({title = "Heading" , description , lists}) {
    const itemList = lists.map((para) => <li>{para}</li>)
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{itemList}</h3>
    </div>
  );
}

export default Product;
