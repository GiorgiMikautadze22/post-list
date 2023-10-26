import React from "react";

const Post = ({ content, handleDelete, postNum }) => {
  return (
    <div className="post">
      <div className="display-grid">
        <img
          onClick={() => handleDelete(content)}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/2048px-Flat_cross_icon.svg.png"
        />
        <label>Length - {postNum.length}</label>
      </div>
      <button>{postNum.id}</button>
      <p>{content.title}</p>
    </div>
  );
};

export default Post;
