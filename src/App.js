import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";
import Post from "./Components/Post";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      {/* <Button />
      <button></button>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <h1>{text}</h1> */}
      {/* <input placeholder="Write text.." type="text" /> */}
      <form>
        <textarea type="input" placeholder="Write text.."></textarea>
      </form>
      <div className="postLength">
        <h1>Post Titles Length is</h1>
        <span>0</span>
      </div>
      <Post />
    </div>
  );
}

export default App;
