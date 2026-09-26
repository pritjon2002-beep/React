import Product from "./Product";

function ProductTab() {
    let lists = ["para1" ,"para2" , "para3" ,"para4"];
  return (
    <>
      <Product title="Heading 1 " description="first description "  lists = {lists} />
      <Product title="Heading 2 " description=" second description"  lists = {lists} />
      <Product title="Heading 3" description="third description"  lists = {lists} />
      <Product  description="forth description"  lists = {lists} />
    </>
  );
}

export default ProductTab;
