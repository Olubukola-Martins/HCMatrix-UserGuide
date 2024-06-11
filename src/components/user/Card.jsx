import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idHandler } from "../../state/user/userData/userData";
import { findSingleArticle } from "../../state/user/userData/thunkFunction";

const Card = ({
  className,
  mainCategory,
  subcategory,
  title,
  description,
  nestedCategory,
  nestedCategoryTitle,
  id,
  type,
  articleId,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(idHandler({ type, id }));

    if (articleId) {
      dispatch(findSingleArticle(articleId));
    }

    //  When routing to the articles and no subCategories
    if (!subcategory) {
      navigate(`/articles/${mainCategory}/${title}`);
      return;
    }

    //When routing to the article that has a nested category
    if (nestedCategory && mainCategory && subcategory && title) {
      navigate(
        `/category/${mainCategory}/${subcategory}/nested/${nestedCategory}/${title}`
      );
      return;
    }

    // When routing to the nested route categories articles
    if (nestedCategoryTitle) {
      navigate(
        `/category/${mainCategory}/${subcategory}/nested/${nestedCategoryTitle}`
      );
      return;
    }

    // When routing to the nested route categories
    if (nestedCategory?.length) {
      navigate(`/category/${mainCategory}/${subcategory}/nested`);
      return;
    }

    // When there is a subcategory but no nested category
    if (mainCategory && subcategory && !title) {
      navigate(`/category/${mainCategory}/${subcategory}`);
      return;
    }

    //When routing to a single article that has a subcategory and no subCategory
    if (mainCategory && subcategory && title) {
      navigate(`/category/${mainCategory}/${subcategory}/${title}`);
      return;
    }
  };

  return (
    <div
      className={`group group-hover:text-white rounded-lg transition-all duration-500 ease-in-out  bg-white px-4 py-4 customShadow border border-[#D7DDE8] cursor-pointer group-hover:bg-customGray hover:bg-customGray ${className}`}
      onClick={() => onClickHandler()}
    >
      <h3 className="md:text-lg text-[16px] font-semibold text-customGray-dark transition-all duration-300 ease-in-out group-hover:text-white capitalize">
        {nestedCategoryTitle
          ? nestedCategoryTitle
          : title
          ? title
          : subcategory}
      </h3>
      <p className="md:text-[12px] text-[10px] transition-all duration-300 ease-in-out text-customGray-light group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default Card;
