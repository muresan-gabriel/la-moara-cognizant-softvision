import { useState, useEffect } from "react";

const PostContainer = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  if (!loaded)
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div class="post-container d-flex flex-column" withLoading={true}>
      <h4>A fantastic fellow</h4>
      <img
        src="/img/react-otter.png"
        class="otter-img"
        width="350"
        height="auto"
      />
      <div class="align-self-end">
        <button class="btn btn-like shadow-none">Like</button>
        <button class="btn btn-comment shadow-none">Comment</button>
        <button class="btn btn-share shadow-none">Share</button>
      </div>
    </div>
  );
};

export default PostContainer;
