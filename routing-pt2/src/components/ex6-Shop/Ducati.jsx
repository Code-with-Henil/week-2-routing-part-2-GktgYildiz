import data from "./data";
import "./category.css";
const Ducati = () => {
  const ducatiBikes = data.categories.find(
    (category) => category.name === "Ducati"
  );

  return (
    <div className="moto-container">
      <h1 className="moto-header">Ducati Motorcycles</h1>
      <ul>
        {ducatiBikes.products.map((product) => (
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

export default Ducati;
