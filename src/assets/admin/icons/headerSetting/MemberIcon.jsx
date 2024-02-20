import { useSelector } from "react-redux";

const MemberIcon = () => {
  const { settingsMenu } = useSelector((store) => store.adminHeader);
  const { active } = settingsMenu[2];
  return (
    <svg
      className={`${active ? "text-adminHighlight" : ""}`}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6C4 5.80302 4.0388 5.60796 4.11418 5.42597C4.18956 5.24399 4.30005 5.07863 4.43934 4.93934C4.57863 4.80005 4.74399 4.68956 4.92597 4.61418C5.10796 4.5388 5.30302 4.5 5.5 4.5C5.69698 4.5 5.89204 4.5388 6.07403 4.61418C6.25601 4.68956 6.42137 4.80005 6.56066 4.93934C6.69995 5.07863 6.81044 5.24399 6.88582 5.42597C6.9612 5.60796 7 5.80302 7 6C7 6.39782 6.84196 6.77936 6.56066 7.06066C6.27936 7.34196 5.89782 7.5 5.5 7.5C5.10218 7.5 4.72064 7.34196 4.43934 7.06066C4.15804 6.77936 4 6.39782 4 6ZM5.5 3.5C4.83696 3.5 4.20107 3.76339 3.73223 4.23223C3.26339 4.70107 3 5.33696 3 6C3 6.66304 3.26339 7.29893 3.73223 7.76777C4.20107 8.23661 4.83696 8.5 5.5 8.5C6.16304 8.5 6.79893 8.23661 7.26777 7.76777C7.73661 7.29893 8 6.66304 8 6C8 5.33696 7.73661 4.70107 7.26777 4.23223C6.79893 3.76339 6.16304 3.5 5.5 3.5ZM10.5 6.5C10.5 6.23478 10.6054 5.98043 10.7929 5.79289C10.9804 5.60536 11.2348 5.5 11.5 5.5C11.7652 5.5 12.0196 5.60536 12.2071 5.79289C12.3946 5.98043 12.5 6.23478 12.5 6.5C12.5 6.76522 12.3946 7.01957 12.2071 7.20711C12.0196 7.39464 11.7652 7.5 11.5 7.5C11.2348 7.5 10.9804 7.39464 10.7929 7.20711C10.6054 7.01957 10.5 6.76522 10.5 6.5ZM11.5 4.5C10.9696 4.5 10.4609 4.71071 10.0858 5.08579C9.71071 5.46086 9.5 5.96957 9.5 6.5C9.5 7.03043 9.71071 7.53914 10.0858 7.91421C10.4609 8.28929 10.9696 8.5 11.5 8.5C12.0304 8.5 12.5391 8.28929 12.9142 7.91421C13.2893 7.53914 13.5 7.03043 13.5 6.5C13.5 5.96957 13.2893 5.46086 12.9142 5.08579C12.5391 4.71071 12.0304 4.5 11.5 4.5ZM1.5 11C1.5 10.6022 1.65804 10.2206 1.93934 9.93934C2.22064 9.65804 2.60218 9.5 3 9.5H8C8.39782 9.5 8.77936 9.65804 9.06066 9.93934C9.34196 10.2206 9.5 10.6022 9.5 11V11.112C9.49894 11.1578 9.49561 11.2035 9.49 11.249C9.43301 11.7338 9.25259 12.1959 8.966 12.591C8.419 13.346 7.379 14 5.5 14C3.622 14 2.582 13.346 2.033 12.591C1.74676 12.1958 1.56669 11.7337 1.51 11.249C1.50502 11.2035 1.50169 11.1578 1.5 11.112V11.094V11ZM2.5 11.09V11.097L2.504 11.146C2.54273 11.4556 2.65899 11.7503 2.842 12.003C3.168 12.451 3.878 13 5.5 13C7.122 13 7.832 12.451 8.158 12.003C8.34101 11.7503 8.45727 11.4556 8.496 11.146C8.49779 11.1294 8.49913 11.1127 8.5 11.096V11C8.5 10.8674 8.44732 10.7402 8.35355 10.6464C8.25979 10.5527 8.13261 10.5 8 10.5H3C2.86739 10.5 2.74021 10.5527 2.64645 10.6464C2.55268 10.7402 2.5 10.8674 2.5 11V11.09ZM11.5 13C10.912 13 10.43 12.91 10.04 12.762C10.2003 12.4683 10.3217 12.155 10.401 11.83C10.669 11.931 11.025 12 11.5 12C12.619 12 13.078 11.618 13.28 11.334C13.3981 11.1683 13.473 10.9759 13.498 10.774L13.5 10.746C13.499 10.6804 13.4721 10.6178 13.4254 10.5718C13.3786 10.5258 13.3156 10.5 13.25 10.5H10.45C10.3762 10.1374 10.2224 9.79575 10 9.5H13.25C13.94 9.5 14.5 10.06 14.5 10.75V10.767C14.4988 10.8034 14.4961 10.8398 14.492 10.876C14.4496 11.2508 14.3127 11.6087 14.094 11.916C13.672 12.507 12.881 13 11.5 13Z"
        fill={`${active ? "#F77366" : "#3A3A3A"}`}
        fillOpacity={`${active ? "1" : "0.4"}`}
      />
    </svg>
  );
};
export default MemberIcon;
