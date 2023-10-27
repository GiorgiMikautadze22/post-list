import "./App.css";
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
        <span>{postLength}</span>
      </div>
      {posts
        .sort((a, b) => b.id - a.id)
        .map((el) => {
          return <Post handleDelete={handleDelete} content={el} key={el.id} />;
        })}
    </div>
  );
}

export default App;
