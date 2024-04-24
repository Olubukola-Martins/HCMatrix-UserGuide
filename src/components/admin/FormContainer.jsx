const FormContainer = ({ label, children }) => {
  return (
    <div className="mb-3">
      <label className="text-sm text-customGray block mb-3 font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
};
export default FormContainer;
