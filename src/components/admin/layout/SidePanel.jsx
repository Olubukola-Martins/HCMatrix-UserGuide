const SidePanel = ({ children, width, className }) => {
  return (
    <div
      className={`hidden md:block ${width ? width : `w-[30%] `} ${className}`}
    >
      {children}
    </div>
  );
};
export default SidePanel;
