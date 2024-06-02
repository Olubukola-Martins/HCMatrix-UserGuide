import { FaSpinner } from "react-icons/fa";

const Button = ({ message, loading, margin }) => {
  return (
    <button
      className={`text-white text-center capitalize py-[.7rem] px-12 md:self-start bg-btn-red rounded-lg ${margin}`}
    >
      <div className="flex mx-auto items-center justify-center w-32">
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
