import { useState } from "react";

const Name = (props) => {
  const [color, setColor] = useState(false);

  const onClickHandler = () => {
    setColor(!color);
  };

  return (
    <div className="name-container">
      <h3
        id="myName"
        className={color ? "my-name-color" : undefined}
        onClick={onClickHandler}
      >
        Gabriel Mureșan
      </h3>
      {color ? <p>This text is colored!</p> : undefined}
    </div>
  );
};

export default Name;
