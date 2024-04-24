import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmojis } from "../../state/admin/categories/thunkFunctions";

const EmojiPicker = ({
  value,
  name,
  type,
  className,
  placeholder,
  onChange,
}) => {
  const dispatch = useDispatch();
  const { emoji } = useSelector((store) => store.adminData);

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  return (
    <>
      <select
        type={type}
        className={`w-full py-3 px-4 rounded-lg border outline-none text-sm ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Choose Emoji"
      >
        <option value="" disabled>
          Select Emoji
        </option>
        {emoji?.map((each) => {
          return (
            <option key={each?.id} id={each?.id}>
              {each?.code}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default EmojiPicker;
