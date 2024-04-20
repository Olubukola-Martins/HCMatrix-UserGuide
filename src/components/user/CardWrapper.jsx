const CardWrapper = ({ children, empty }) => {
  return (
    <div
      className={`min-h-[40vh] ${
        empty
          ? "grid place-items-center"
          : "grid  md:gap-5 mt-8 items-start  gap-2 grid-col-1 md:grid-cols-2"
      } `}
    >
      {children}
    </div>
  );
};
export default CardWrapper;
