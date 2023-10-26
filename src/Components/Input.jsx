const Input = ({ text, handleChange, handleKeyDown }) => {
  return (
    <textarea
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      rows="1"
      placeholder="Write here..."
    />
  );
};

export default Input;
