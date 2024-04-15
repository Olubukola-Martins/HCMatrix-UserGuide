import { ReviewModal } from "./modals";
import { useSelector, useDispatch } from "react-redux";

import { handleReaction } from "../../state/user/modals/userModalSlice";

const EmojiComponent = ({ react }) => {
  const { name, emoji } = react;

  const dispatch = useDispatch();

  const reactionHandler = () => {
    dispatch(handleReaction(name));
  };

  return (
    <>
      <img
        className="cursor-pointer h-[25px]"
        src={emoji}
        alt=""
        onClick={() => reactionHandler()}
      />
    </>
  );
};
export default EmojiComponent;
