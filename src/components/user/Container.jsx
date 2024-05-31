const Container = ({ children, margin }) => {
  return (
    <div
      className={`container  ${margin ? margin : "mt-[-4rem] md:mt-[-8rem]"}`}
    >
      {children}
    </div>
  );
};

export default Container;
