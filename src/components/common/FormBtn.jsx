import { FaSpinner } from "react-icons/fa";

const FormBtn = ({ custom, loading }) => {
  return (
    <button
      disabled={loading}
      className={`w-full py-3 px-4 border outline-none bg-customRed-light text-white ${
        custom ? custom : "rounded-lg"
      }`}
    >
      {loading ? <FaSpinner className="spinner-icon" /> : "submit"}
    </button>
  );
};
export default FormBtn;
