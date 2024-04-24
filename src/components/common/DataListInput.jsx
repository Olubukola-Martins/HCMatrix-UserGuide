const DataListInput = ({
  onChange,
  value,
  name,
  type,
  className,
  placeholder,
  category,
}) => {
  return (
    <>
      <input
        type={type}
        className={`w-full py-5 px-4 rounded-lg border outline-none text-[12px] ${className}`}
        list="category"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="labelLine">{placeholder}</div>
      <datalist id="category">
        {category?.map((each, index) => {
          return <option key={index} value={each?.name} id={each?.id} />;
        })}
      </datalist>
    </>
  );
};
export default DataListInput;
