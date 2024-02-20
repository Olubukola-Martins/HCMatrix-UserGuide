import { useSelector } from "react-redux";

const CreateIcon = ({ className }) => {
  const { settingsMenu } = useSelector((store) => store.adminHeader);
  const { active } = settingsMenu[0];
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_649_6325)">
        <path
          d="M8 16.5C3.5815 16.5 0 12.9185 0 8.5C0 4.0815 3.5815 0.5 8 0.5C12.4185 0.5 16 4.0815 16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5ZM8 1.5C4.134 1.5 1 4.634 1 8.5C1 12.366 4.134 15.5 8 15.5C11.866 15.5 15 12.366 15 8.5C15 6.64348 14.2625 4.86301 12.9497 3.55025C11.637 2.2375 9.85652 1.5 8 1.5Z"
          fill={`${active ? "#F77366" : "#3A3A3A"}`}
          fillOpacity={`${active ? "1" : "0.4"}`}
        />
        <path
          d="M11.5 8H8.5V5H7.5V8H4.5V9H7.5V12H8.5V9H11.5V8Z"
          fill={`${active ? "#F77366" : "#3A3A3A"}`}
          fillOpacity={`${active ? "1" : "0.4"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_649_6325">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CreateIcon;
