import Product from "../components/product";

const Exercise1 = () => {
  return (
    <div className="exercise">
      <Product
        categoryColor="#c26ee2"
        name="Chicken Wings"
        price="$3.99"
        category="Animal Product"
      />
      <Product
        categoryColor="#ff0f27"
        name="Strawberries"
        category="Fruits & Vegetables"
      />
      <Product
        categoryColor="#fba001"
        name="Mustard"
        price="$0.89"
        category="Sauces"
      />
    </div>
  );
};

export default Exercise1;
