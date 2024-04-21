const SectionContainer = ({ children }) => {
  return (
    <div className="w-full rounded-2xl px-3 md:px-12 py-5 pb-6 md:pb-14 customShadow bg-white transition-all duration-75">
      {children}
    </div>
  );
};
export default SectionContainer;
