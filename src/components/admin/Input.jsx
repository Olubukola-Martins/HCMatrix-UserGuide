const Input = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className ? `inputStyle ${className}` : `inputStyle`}
    />
  );
};

export default Input;
