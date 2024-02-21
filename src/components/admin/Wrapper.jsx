const Wrapper = ({ children, className, edges, onClickHandler }) => {
  return (
    <div
      onClick={() => onClickHandler()}
      className={`${
        className ? `${className}` : "rounded-lg bg-white"
      } py-3 overflow-hidden ${edges ? edges : ""}`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
