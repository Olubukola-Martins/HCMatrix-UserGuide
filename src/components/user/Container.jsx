const Container = ({ children, margin }) => {
  return (
    <div
      className={`md:max-w-[calc(100%-8rem)] max-w-[85%]  mx-auto font-body mb-32 z-50 relative ${
        margin ? margin : "mt-[-8rem]"
      }`}
    >
      {children}
    </div>
  );
};
export default Container;
