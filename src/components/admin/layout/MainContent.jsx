const MainContent = ({ children, className }) => {
  return (
    <div className={`${className ? className : "flex-1"}`}>{children}</div>
  );
};
export default MainContent;
