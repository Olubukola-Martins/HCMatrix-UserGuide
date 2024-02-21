const Input = ({ placeholder, className }) => {
    const styles = `outline-none border-2 border-customGray-ligh rounded-xl py-4 pl-5`
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className ?  `${styles} ${className}`   : styles}
    />
  );
};

export default Input;
