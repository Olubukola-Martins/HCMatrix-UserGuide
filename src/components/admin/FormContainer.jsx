const FormContainer = ({ label, children }) => {
  return (
    <div className="mb-3">
      <label className="text-sm text-customGray-lightest block mb-2 font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
};
export default FormContainer;
