const CardWrapper = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-5 mt-8 grid-col-1 gap-2">
      {children}
    </div>
  );
};
export default CardWrapper;
