import Wrapper from "./Wrapper";
import { AddBtn } from "../../assets/admin/icons/dashboard";
import { useDispatch } from "react-redux";
import { reset } from "../../state/admin/articles/articleSlice";
import { newArticleModalToggle } from "../../state/admin/modalSlice";

const AddArticle = ({ color }) => {
  const dispatch = useDispatch();

  const newArticleHandler = () => {
    dispatch(reset());
    dispatch(newArticleModalToggle());
  };

  return (
    <Wrapper
      className={`flex ${
        color
          ? "  bg-customRed-light text-white min-w-[10rem] max-w-[30%]"
          : "bg-white"
      } justify-center rounded-lg items-center gap-2 mb-5 cursor-pointer`}
      onClickHandler={newArticleHandler}
    >
      <AddBtn color="#ffffff" />
      <span>New Article</span>
    </Wrapper>
  );
};
export default AddArticle;
