import Logo from "../../assets/user/Logo.svg";
import { useSelector } from "react-redux";
import Container from "./Container";

const Footer = () => {
  const { badge } = useSelector((store) => store.customization);
  return (
    <footer className="">
      <Container margin={"mx-auto"}>
        <div className=" grid place-items-center">
          {badge && (
            <div className="flex items-center">
              <p className="text-sm">Powered by</p>
              <img src={Logo} alt="" className="h-14 -ml-2 " />
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
