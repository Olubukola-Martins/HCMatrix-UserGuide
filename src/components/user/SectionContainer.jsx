const SectionContainer = ({ children }) => {
  return (
    <div className="w-full rounded-2xl px-5 md:px-12 pt-8 pb-14 customShadow bg-white transition-all duration-75">
      {children}
    </div>
  );
};
export default SectionContainer;
