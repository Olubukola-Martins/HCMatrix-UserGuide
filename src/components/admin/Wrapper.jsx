const Wrapper = ({ className, children }) => {
  return <div className={`${className ? className : ""}`}>{children}</div>;
};
export default Wrapper;
