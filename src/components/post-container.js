import OtterImage from "../components/otter-image";

const PostContainer = (props) => {
  return (
    <div class="post-container d-flex flex-column">
      <h4>A handsome otter</h4>
      <OtterImage />
      <div class="align-self-end">
        <button class="btn btn-like shadow-none">Like</button>
        <button class="btn btn-comment shadow-none">Comment</button>
        <button class="btn btn-share shadow-none">Share</button>
      </div>
    </div>
  );
};

export default PostContainer;
