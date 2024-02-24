import { useDispatch, useSelector } from "react-redux";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";

const NewArticleModal = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(newArticleModalToggle());
  };

  //   fixed top-0 left-0 z-10 bg-opacity-5 bg-black

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-10 flex items-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10 "
        onClick={() => onClickHandler()}
      ></div>

      {/* The form Container */}
      <div className="relative form border-3 rounded-2xl pr-4 z-20 bg-white w-2/5 h-[90%] overflow-y-scroll pl-6 px-5 shadow-lg my-6">
        {/* For The Effect */}
        <div className="h-[20px] w-[37%] fixed bg-white"></div>

        <form className="w-full">
          <h3 className="font-semibold text-lg mb-4 mt-4">
            Create New Article
          </h3>
          <div className="mb-3">
            <label className="text-sm text-customGray-lightest block mb-2 font-semibold ">
              Select category
            </label>
            <select className="w-full py-3 px-4 rounded-lg border outline-none text-sm">
              <option value="man">man</option>
              <option value="man">woman</option>
              <option value="man">boy</option>
              <option value="man">girl</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="text-sm text-customGray-lightest block mb-2 font-semibold">
              Select sub category
            </label>
            <select className="w-full py-3 px-4 rounded-lg border outline-none text-sm">
              <option value="man">man</option>
              <option value="man">woman</option>
              <option value="man">boy</option>
              <option value="man">girl</option>
            </select>
          </div>

          {/*  */}
          <div className="mb-3">
            <label className="text-sm text-customGray-lightest block mb-2 font-semibold">
              Select least category (optional)
            </label>
            <select className="w-full py-3 px-4 rounded-lg border outline-none text-sm">
              <option value="man">Documents</option>
              <option value="man">woman</option>
              <option value="man">boy</option>
              <option value="man">girl</option>
            </select>
          </div>

          {/* The input form */}
          <div className="mb-3">
            <label className="text-sm text-customGray-lightest block mb-2 font-semibold">
              Article Title
            </label>
            <input
              type="text"
              className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
            />
          </div>

          {/* Add desc */}
          <div className="mb-3">
            <label className="text-sm text-customGray-lightest block mb-2 font-semibold">
              Article Description
            </label>
            <textarea
              type="text"
              className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
            />
          </div>

          <div className="mb-3">
            <button className="w-full py-3 px-4 rounded-lg border outline-none bg-customRed-light text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewArticleModal;
