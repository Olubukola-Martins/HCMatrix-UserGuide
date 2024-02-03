import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Card = ({
  mainCategory,
  subcategory,
  title,
  description,
  nestedCategory,
  nestedCategoryTitle,
}) => {
  const navigate = useNavigate();

  // console.log(
  //   `This is the main category ${mainCategory}, This is the sub category ${subCategory}, This is the title ${title}, This is the description ${description}`
  // );

  const onClickHandler = () => {
    // console.log(mainCategory, subCategory, nestedCategory, "from the card");

    //  When routing to the articles and no subCategories
    if (!subcategory) {
      console.log("no sub");
      navigate(`/articles/${mainCategory}/${title}`);
      return;
    }

    if (nestedCategory && mainCategory && subcategory && title) {
      console.log("routing to nested category articles");
      navigate(
        `/category/${mainCategory}/${subcategory}/nested/${nestedCategory}/${title}`
      );
      return;
    }

    if (nestedCategoryTitle) {
      console.log("routing to nested category articles");
      console.log(subcategory);
      navigate(
        `/category/${mainCategory}/${subcategory}/nested/${nestedCategoryTitle}`
      );
      return;
    }

    if (nestedCategory) {
      console.log("routing to nested categories");
      navigate(`/category/${mainCategory}/${subcategory}/nested`);
      return;
    }

    // When there is a subcategory but no nested category
    if (mainCategory && subcategory && !title) {
      console.log("routing to subcategories no nesting");
      console.log("problem");
      navigate(`/category/${mainCategory}/${subcategory}`);
      return;
    }

    //When routing to the articles and has a subcategory
    if (mainCategory && subcategory && title) {
      console.log("routing to subcategories without nesting articles");
      navigate(`/category/${mainCategory}/${subcategory}/${title}`);
      return;
    }

    // if (nestedCategory) {
    //   navigate(`/${category}/${subCategory}/${title}`);
    // }

    // navigate(`/${mainCategory}/${subCategory}/${title}`);
  };

  return (
    <div
      className="group group-hover:text-white rounded-lg transition-all duration-500 ease-in-out  bg-white px-4 py-4 customShadow border border-[#D7DDE8] cursor-pointer group-hover:bg-customGray hover:bg-customGray"
      onClick={() => onClickHandler()}
    >
      <h3 className="text-lg font-semibold text-customGray-dark transition-all duration-300 ease-in-out group-hover:text-white capitalize">
        {nestedCategoryTitle
          ? nestedCategoryTitle
          : title
          ? title
          : subcategory}
        ?
      </h3>
      <p className="text-[12px] transition-all duration-300 ease-in-out text-customGray-light group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default Card;
