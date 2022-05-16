import OtterImage from "../components/otter-image";

const PostContainer = (props) => {
  return (
    <div className="post-container d-flex flex-column">
      <h4>A handsome otter</h4>
      <OtterImage />
      <div className="align-self-end">
        <button className="btn btn-like shadow-none">Like</button>
        <button className="btn btn-comment shadow-none">Comment</button>
        <button className="btn btn-share shadow-none">Share</button>
      </div>
    </div>
  );
};

export default PostContainer;
