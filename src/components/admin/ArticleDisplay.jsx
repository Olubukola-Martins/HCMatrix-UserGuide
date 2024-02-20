const ArticleDisplay = ({ type }) => {
  return (
    <div className="flex px-6 py-6 border items-stretch">
      <div className="flex-1 border">some</div>
      <div className="flex-1 flex text-center border bg-black">
        <span className="bg-red-100 flex-1">50%</span>
        <span className="bg-green-400 flex-1">50%</span>
        <span className="bg-black flex-1">50%</span>
      </div>
      <div className="w-[30%] grid place-items-center">this</div>
    </div>
  );
};
export default ArticleDisplay;
