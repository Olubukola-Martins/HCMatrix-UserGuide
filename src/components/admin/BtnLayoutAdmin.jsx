const BtnLayoutAdmin = ({ children, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="border border-[#FFFFFFB2] rounded-xl py-3 flex items-center justify-start gap-3 px-4 text-[#FFFFFFB2] text-[13px]"
    >
      {children}
    </button>
  );
};
export default BtnLayoutAdmin;
