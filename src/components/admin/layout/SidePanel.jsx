const SidePanel = ({ children, width, className }) => {
  return (
    <div className={` ${width ? width : `w-[30%]`} ${className}`}>
      {children}
    </div>
  );
};
export default SidePanel;
