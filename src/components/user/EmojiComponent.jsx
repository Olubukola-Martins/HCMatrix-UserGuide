const EmojiComponent = ({ react }) => {
  const { name, emoji } = react;

  const reactionHandler = () => {
    alert(name);
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
