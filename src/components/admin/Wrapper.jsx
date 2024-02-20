const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : "rounded-lg bg-white"
      } rounded-lg py-3`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
