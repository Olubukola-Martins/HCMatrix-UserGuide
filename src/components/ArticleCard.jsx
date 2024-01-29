import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article, category }) => {
  const { title, description } = article;
  const navigate = useNavigate();

  const link = `/${category}/${title}`;
  console.log(link);

  const onClickHandler = () => {
    navigate(`/${category}/${title}`);
  };

  return (
    <div
      className="group group-hover:text-white rounded-lg transition-all duration-500 ease-in-out  bg-white px-4 py-4 customShadow border border-[#D7DDE8] cursor-pointer group-hover:bg-customGray hover:bg-customGray"
      onClick={() => onClickHandler()}
    >
      <h3 className="text-lg font-semibold text-customGray-dark transition-all duration-300 ease-in-out group-hover:text-white">
        {title}?
      </h3>
      <p className="text-[12px] transition-all duration-300 ease-in-out text-customGray-light group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default ArticleCard;
