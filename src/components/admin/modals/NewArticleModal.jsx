import { useDispatch, useSelector } from "react-redux";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";

const NewArticleModal = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(newArticleModalToggle());
  };

  return (
    <div
      className="w-[100%] h-[100%] fixed top-0 left-0 z-10 opacity-5 bg-black"
      onClick={() => onClickHandler()}
    >
      <div>Man</div>
    </div>
  );
};
export default NewArticleModal;
