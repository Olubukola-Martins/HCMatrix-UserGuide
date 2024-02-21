const DashBoardHeader = ({ title, svg, articles }) => {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-3">
        <img src={svg} alt="" className="h-6 " />
        <h2 className="text-[27px] mb-2 capitalize font-[600]">{title}</h2>
      </div>
      <span className="text-sm font-semibold text-customGray-light">{`${articles?.length} Articles`}</span>
    </section>
  );
};
export default DashBoardHeader;
