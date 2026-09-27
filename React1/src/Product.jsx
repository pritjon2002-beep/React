import Price from "./Price";
import "./Product.css"


function Product({ title, description, idx }) {
   let old_price = [12495, 11900, 1599, 599];
 let  new_price = [8999, 9199, 899, 278];
  return (
    <div className="Product">
      <h1>{title[idx]}</h1>

      <h3>{description[idx][0]}</h3>
      <h3>{description[idx][1]}</h3>

      <Price oldPrice = {old_price} newPrice = {new_price}  idx = {idx}/>
    </div>
  );
}

export default Product;