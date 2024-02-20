import { useSelector } from "react-redux";

const LookIcon = () => {
  const { settingsMenu } = useSelector((store) => store.adminHeader);
  const { active } = settingsMenu[1];

  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2.5H15.5V3.5H0.5V2.5Z"
        fill={`${active ? "#F77366" : "#3A3A3A"}`}
        fillOpacity={`${active ? "1" : "0.4"}`}
      />
      <path
        d="M3 3.5V11.5H13V3.5H3ZM2 2.5H14V12C14 12.1326 13.9473 12.2598 13.8536 12.3536C13.7598 12.4473 13.6326 12.5 13.5 12.5H2.5C2.36739 12.5 2.24021 12.4473 2.14645 12.3536C2.05268 12.2598 2 12.1326 2 12V2.5Z"
        fill={`${active ? "#F77366" : "#3A3A3A"}`}
        fillOpacity={`${active ? "1" : "0.4"}`}
      />
      <path
        d="M5.034 15.5H3.88L6.14 11.585L7.006 12.085L5.034 15.5ZM12.126 15.5H10.972L9 12.085L9.866 11.585L12.126 15.5Z"
        fill={`${active ? "#F77366" : "#3A3A3A"}`}
        fillOpacity={`${active ? "1" : "0.4"}`}
      />
    </svg>
  );
};
export default LookIcon;
