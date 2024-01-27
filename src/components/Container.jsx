const Container = ({ children, style }) => {
  return (
    <div
      className={` ${style} md:max-w-[calc(100%-8rem)] max-w-[90%]  mx-auto font-body`}
    >
      {children}
    </div>
  );
};
export default Container;
