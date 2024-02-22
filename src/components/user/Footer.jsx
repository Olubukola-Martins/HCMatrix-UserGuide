import Logo from "../../assets/user/Logo.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { badge } = useSelector((store) => store.customization);
  return (
    <div className="footer">
      {badge && (
        <div className="footer__content">
          <p>Powered by</p>
          <img src={Logo} alt="" />
        </div>
      )}
    </div>
  );
};

export default Footer;
