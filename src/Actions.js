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

      //   if (posts.length === 0) {
      //     setPostLength(text.length);
      //   } else {
      //     posts.map((el) => {
      //       setPostLength(postLength + el.textLength);
      //       console.log(postLength);
      //     });
      //   }

      setPostLength(postLength + text.length);

      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId.id));
    posts.map((post) => {
      if (post.id !== postId.id) {
        setPostLength(postLength - post.textLength);
        console.log(postLength);
      }
    });
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
