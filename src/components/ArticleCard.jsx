const ArticleCard = ({ article }) => {
  const { title, description } = article;

  const onClickHandler = () => {};

  return (
    <div
      className="group group-hover:text-white rounded-lg transition-all duration-500 ease-in-out  bg-white px-4 py-4 customShadow border border-[#D7DDE8] cursor-pointer group-hover:bg-customGray hover:bg-customGray"
      onClick={() => onClickHandler()}
    >
      <h3 className="text-lg font-semibold text-customGray-dark group-hover:text-white">
        {title}?
      </h3>
      <p className="text-[12px] text-customGray-light group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default ArticleCard;
