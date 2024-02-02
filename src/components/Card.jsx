import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({
  category,
  subCategory,
  article,
  title,
  description,
  articleName,
  categoryId,
}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (!subCategory) {
      navigate(`/${category}/${title}`);
      return;
    }

    navigate(`/${category}/${subCategory}/${title}`);
  };

  return (
    <div
      className="group group-hover:text-white rounded-lg transition-all duration-500 ease-in-out  bg-white px-4 py-4 customShadow border border-[#D7DDE8] cursor-pointer group-hover:bg-customGray hover:bg-customGray"
      onClick={() => onClickHandler()}
    >
      <h3 className="text-lg font-semibold text-customGray-dark transition-all duration-300 ease-in-out group-hover:text-white capitalize">
        {title}?
      </h3>
      <p className="text-[12px] transition-all duration-300 ease-in-out text-customGray-light group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default Card;
