import Container from "./Container";
import footerImg from "../assets/images/hcmatrix.png";

const Footer = () => {
  return (
    <Container>
      <div className="flex items-center border border-black justify-center ">
        <p className="mr-[-18px] text-sm font-semibold">Powered by</p>
        <img src={footerImg} alt="" />
      </div>
    </Container>
  );
};
export default Footer;
