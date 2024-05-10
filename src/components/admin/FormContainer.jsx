const FormContainer = ({ label, children }) => {
  return (
    <div className="mb-4">
      <label className="text-sm text-[#3A3A3A99] block mb-2 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
};
export default FormContainer;
