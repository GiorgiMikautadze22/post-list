import { useState } from "react";

const Actions = () => {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLength, setPostLength] = useState(Number);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          title: text,
          textLength: text.length,
        },
      ]);
      console.log(posts);
      // if (posts.length === 0) {
      //   setPostLength(postLength + text);
      // } else {
      //   setPostLength("");
      //   posts.map((post) => {
      //     return setPostLength(postLength + post.title);
      //   });
      // }
      setPostLength(postLength + text.length);

      console.log(postLength);

      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId.id));
    setPostLength("");
    setPostLength(postLength - postId.title.length);
  };

  return {
    text,
    posts,
    handleKeyDown,
    handleChange,
    handleDelete,
    postLength,
  };
};

export default Actions;
