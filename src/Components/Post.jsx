import React from "react";

const Post = ({ content, handleDelete }) => {
  return (
    <div className="post">
      <div className="display-grid">
        <img
          onClick={() => handleDelete(content)}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/2048px-Flat_cross_icon.svg.png"
        />
        <label>Length - {content.textLength}</label>
      </div>
      <button>{content.id}</button>
      <p>{content.title}</p>
    </div>
  );
};

export default Post;
