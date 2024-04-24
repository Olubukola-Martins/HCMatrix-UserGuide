import { FaSpinner } from "react-icons/fa";

const Button = ({ message, loading }) => {
  return (
    <button
      className={`text-white capitalize py-[1rem] px-12 self-start bg-btn-red rounded-lg`}
    >
      <div className="flex items-center justify-center w-32">
        {loading ? (
          <FaSpinner className="animate-spin text-sm" size={22} />
        ) : (
          message
        )}
      </div>
    </button>
  );
};

export default Button;
