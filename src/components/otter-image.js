import { useState, useEffect } from "react";

const OtterImage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  if (!loaded)
    return (
      <div className="spinner-container">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <img
      withLoading={true}
      src="/img/react-otter.png"
      class="otter-img"
      width="350"
      height="auto"
    />
  );
};

export default OtterImage;
