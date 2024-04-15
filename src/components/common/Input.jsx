const Input = ({ onChange, value, name, type }) => {
  return (
    <input
      type={type}
      className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
