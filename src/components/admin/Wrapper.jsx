const Wrapper = ({ children, className, edges, onClickHandler, padding }) => {
  return (
    <div
      onClick={() => onClickHandler()}
      className={`${className ? `${className}` : "rounded-lg bg-white"} ${
        padding ? padding : "py-3"
      } overflow-hidden ${edges ? edges : ""}`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
