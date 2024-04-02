// const Container = ({ children, margin }) => {
//   return (
//     <div
//       className={`md:max-w-[calc(100%-8rem)] max-w-[90%]  mx-auto font-body mb-32 relative ${
//         margin ? margin : "mt-[-8rem]"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };
// export default Container;

const Container = ({ children, margin }) => {
  return (
    <div
      className={`max-w-[1250px] mx-auto px-4 md:px-8 font-body relative z-50 mb-32 ${
        margin ? margin : "mt-[-8rem]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
