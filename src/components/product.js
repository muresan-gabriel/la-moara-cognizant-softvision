import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div className="package">
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
      <div
        className="category"
        style={{ backgroundColor: props.categoryColor }}
      >
        {props.category}
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
};

Product.defaultProps = {
  name: "Name does not exist.",
  price: "Price does not exist.",
  category: "Category does not exist.",
  categoryColor: "#c5c5c5",
};

export default Product;
