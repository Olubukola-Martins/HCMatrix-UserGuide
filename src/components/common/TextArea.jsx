const TextArea = ({ type, value, name, onChange, placeholder }) => {
  return (
    <textarea
      type={type}
      className="w-full py-5 px-4 rounded-lg border outline-none text-sm"
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default TextArea;
