import PropTypes from "prop-types";

const ColorBadge = (props) => {
  const handleRemove = () => {
    props.handleRemove(props.id);
  };

  return (
    <div className="badges">
      <div className=" color-label">
        {props.handleRemove && (
          <div className="btn-remove" onClick={handleRemove}>
            <i className="bi-trash3"></i>
          </div>
        )}
        <div className="color-code">{props.badgeColor}</div>
      </div>
      <div
        className="color-badge"
        style={{ backgroundColor: props.badgeColor }}
      ></div>
    </div>
  );
};

ColorBadge.propTypes = {
  colorHex: PropTypes.string,
  badgeColor: PropTypes.string,
};

ColorBadge.defaultProps = {
  id: 0,
  colorHex: "#ffffff",
  badgeColor: "#ffffff",
};

export default ColorBadge;
