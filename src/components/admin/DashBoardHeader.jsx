import { useSelector } from "react-redux";

const DashBoardHeader = () => {
  const { mainCategories } = useSelector((store) => store.adminData);
  const { singleCategoryArticles, loading } = useSelector(
    (store) => store.article
  );

  const active = mainCategories.find((category) => {
    return category.active === true;
  });

  return (
    <section className="mb-4">
      <div className="flex items-center gap-3">
        <span className="text-[27px] -mt-3">{active?.emoji?.code}</span>
        <h2 className="text-[27px] mb-2 capitalize font-[600]">
          {active?.name}
        </h2>
      </div>

      {loading ? (
        <div className="skeleton py-1">loading</div>
      ) : (
        <span className="text-sm font-semibold text-customGray-light">
          {`${
            singleCategoryArticles ? singleCategoryArticles?.length : 0
          } Articles`}
        </span>
      )}
    </section>
  );
};

export default DashBoardHeader;
