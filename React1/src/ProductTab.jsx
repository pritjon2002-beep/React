import Product from "./Product.jsx";

function ProductTab() {
  const titles = [
    "Logitech MX Master",
    "Apple Pencil (2nd Gen)",
    "Zebronics",
    "Petronics Toad",
  ];

  const description = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Touch Surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive Touch Surface"],
    ["Wireless Mouse 2.4GHz", "Optical Orientation"],
  ];


  return (
    <div className="card">
      <Product title={titles} description={description} idx={0} />
      <Product title={titles} description={description} idx={1} />
      <Product title={titles} description={description} idx={2} />
      <Product title={titles} description={description} idx={3} />
    </div>
  );
}

export default ProductTab;
