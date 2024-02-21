const SidePanel = ({ children, width }) => {
  return <div className={`${width ? width : `w-[30%]`}`}>{children}</div>;
};
export default SidePanel;
