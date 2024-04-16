const Input = ({ placeholder, className, onChange, name, value, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className ? `inputStyle ${className}` : `inputStyle`}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
