const FormContainer = ({ label, children, bold }) => {
  return (
    <div className="mb-4">
      <label
        className={` block  capitalize font-SFPro  ${
          bold
            ? " text-customGray-dark text-md mb-4 font-semibold"
            : "text-[#3A3A3A99] text-sm mb-2 font-medium"
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
export default FormContainer;
