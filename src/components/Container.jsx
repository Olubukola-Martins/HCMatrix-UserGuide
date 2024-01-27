const Container = ({ children }) => {
  return (
    <div
      className={`  md:max-w-[calc(100%-8rem)] max-w-[90%]  mx-auto font-body mb-32 mt-[-8rem] z-50 relative`}
    >
      {children}
    </div>
  );
};
export default Container;
