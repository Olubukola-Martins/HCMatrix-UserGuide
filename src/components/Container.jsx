const Container = ({ children, style }) => {
  return (
    <div className={` ${style} md:max-w-[85%] max-w-[90%]  mx-auto font-body`}>
      {children}
    </div>
  );
};
export default Container;
