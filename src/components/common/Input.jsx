import { placeholder } from "../../assets/admin/icons/settings";

const Input = ({ onChange, value, name, type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`w-full py-3 px-4 rounded-lg border outline-none text-sm ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
