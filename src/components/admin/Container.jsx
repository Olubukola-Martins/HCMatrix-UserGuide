const Container = ({ className, children }) => {
  return <div className={`${className} w-[90%] mx-auto`}>{children}</div>;
};
export default Container;
