const CardWrapper = ({ children, empty }) => {
  return (
    <div
      className={` ${
        empty
          ? "grid place-items-center min-h-[40vh]"
          : "grid gap-2 md:gap-5 min-h-[30vh] md:grid-row-gap-2 mt-8 items-start grid-col-1 md:grid-cols-2 pb-8 md:py-[20px]"
      } `}
    >
      {children}
    </div>
  );
};
export default CardWrapper;
