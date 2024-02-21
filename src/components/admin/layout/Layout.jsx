const Layout = ({ children, gap }) => {
  return <div className={`flex ${gap ? gap : "gap-6"}`}>{children}</div>;
};
export default Layout;
