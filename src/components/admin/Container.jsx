const Container = ({ className, children }) => {
  return <div className={`${className} w-[90%] max-w-[1500px] mx-auto `}>{children}</div>;
};
export default Container;
