import "./App.css";
import { useState } from "react";
import Post from "./Components/Post";
import Input from "./Components/Input";
import Actions from "./Actions";

function App() {
  const { text, posts, handleKeyDown, handleChange, handleDelete, postLength } =
    Actions();

  return (
    <div className="App">
      <Input
        text={text}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <div className="postLength">
        <h1>Post Titles Length is</h1>
        {/* {posts.map((el) => {
          return <span key={el.id}>{el.length}</span>;
        })} */}
        <span>{postLength}</span>;
      </div>
      {posts.map((el) => {
        return (
          <Post
            handleDelete={handleDelete}
            content={el}
            key={el.id}
            postNum={el}
          />
        );
      })}
    </div>
  );
}

export default App;
