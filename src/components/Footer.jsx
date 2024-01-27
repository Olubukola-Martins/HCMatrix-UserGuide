import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <p>Powered by</p>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
