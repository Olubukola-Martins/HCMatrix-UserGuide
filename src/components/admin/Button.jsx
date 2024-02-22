const Button = ({ message }) => {
  return (
    <button className="text-white capitalize py-[0.7rem] px-12 self-start bg-btn-red rounded-lg">
      {message}
    </button>
  );
};

export default Button;
