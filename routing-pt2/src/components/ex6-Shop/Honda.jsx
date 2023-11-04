import data from "./data";
import "./category.css";

const Honda = () => {
  const hondaBikes = data.categories.find(
    (category) => category.path === "honda"
  );

  return (
    <div className="moto-container">
      <h1 className="moto-header">Honda Motorcycles</h1>
      <ul>
        {hondaBikes.products.map((product) => (
          <li key={product.id} className="moto-product">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="moto-image"
            />
            <h2>{product.name}</h2>
            <p className="moto-price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Honda;
