import { useState } from "react";

const ColorForm = (props) => {
  const [badgeColor, setBadgeColor] = useState("#ffffff");

  const handleClick = (event) => {
    props.handleClick({ badgeColor });
  };

  return (
    <div className="color-form">
      <input
        type="color"
        className="color-input"
        value={badgeColor}
        onChange={(e) => setBadgeColor(e.target.value)}
      />
      <button className="btn btn-color-form shadow-none" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default ColorForm;
