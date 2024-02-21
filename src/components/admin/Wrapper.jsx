const Wrapper = ({ children, className, edges }) => {
  return (
    <div
      className={`${
        className ? className : "rounded-lg bg-white"
      } rounded-lg py-3 ${edges ? edges : ""}`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
