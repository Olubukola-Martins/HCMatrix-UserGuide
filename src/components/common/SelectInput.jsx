import { select } from "jodit/esm/plugins/select/select";
import { TbCategoryPlus } from "react-icons/tb";

const SelectInput = ({
  category,
  onChange,
  name,
  value,
  placeholder,
  className,
}) => {
  return (
    <select>
      {category.map((each, index) => {
        {
          category?.map((each, index) => {
            return <option key={index} value={each?.name} id={each?.id} />;
          });
        }
      })}
    </select>
  );
};
export default SelectInput;
