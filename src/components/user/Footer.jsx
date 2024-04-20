import Logo from "../../assets/user/Logo.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { badge } = useSelector((store) => store.customization);
  return (
    <div className=" grid place-items-center pb-10 -mt-16">
      {badge && (
        <div className="flex items-center">
          <p className="text-sm">Powered by</p>
          <img src={Logo} alt="" className="h-14 -ml-2 " />
        </div>
      )}
    </div>
  );
};

export default Footer;
