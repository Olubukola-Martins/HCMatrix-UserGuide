import { Link } from "react-router-dom";
import { wavingHand, lock } from "../../assets/user/categories";
import { useNavigate } from "react-router-dom";
import { idHandler } from "../../state/user/userData/userData";
import { useDispatch } from "react-redux";

const placeHolder = {
  svg: wavingHand,
  title: "Sign up and sign in",
  description:
    "Help your user learn more about the basic of your product and how they can get started",
  articlesNo: 7,
};

const CategoryCard = ({ category, isLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigating = () => {
    dispatch(idHandler({ type: category.type, id: category.id }));

    if (category.children.length === 0) {
      navigate(`/articles/${category?.slug}`);
      return;
    }
    navigate(`/category/${category?.slug}`);
  };

  if (!category?.placeholder) {
    return (
      <div className="category__card__container  rounded-lg bg-white customShadow box-border h-auto flex flex-col items-center ">
        <div className="h-full grid grid-rows-4 py-5  md:pt-3 md:pb-3 lg:pb-0 items-center justify-items-center">
          {category?.emoji?.code ? (
            <span className="text-[2.8rem] md:text-[2rem] -mb-2">
              {category?.emoji?.code}
            </span>
          ) : (
            <img src={wavingHand} className="h-10" />
          )}

          <h3 className="category__card__header " onClick={() => navigating()}>
            {category?.name}
          </h3>

          <p className="category__card__text  ">{category?.description}</p>

          <span className="category__card__sub  ">
            {category?.articlesCount} Articles
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`category__card__container  rounded-lg bg-white customShadow box-border h-auto flex flex-col items-center relative overflow-hidden ${
        isLoading ? "skeleton" : ""
      } `}
    >
      <div className="h-full grid grid-rows-4 py-3 items-center justify-items-center">
        <img src={placeHolder.svg} className="h-9 md:h-8 mb-3" alt="" />
        <Link>
          <h3 className="category__card__header ">{placeHolder.title}</h3>
        </Link>
        <p className="category__card__text">{placeHolder.description}</p>
        <span>0</span>
        <div className="inset-0 blur w-full h-full absolute rounded-lg"></div>

        {isLoading ? (
          <div></div>
        ) : (
          <div className="absolute z-10 top-[30%] flex flex-col items-center font-bold text-customGray-semiDark">
            <img src={lock} alt="" />
            <h3 className="mt-8">Coming Soon!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
