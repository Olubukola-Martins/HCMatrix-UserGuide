import Logo from "../../assets/user/Logo.svg";
import { useSelector } from "react-redux";
import Container from "./Container";

const Footer = () => {
  const { badge } = useSelector((store) => store.customization);
  return (
    <footer className="-mt-16 md:-mt-10">
      <Container margin={"mx-auto mb-10"}>
        <div className=" grid place-items-center">
          {badge && (
            <div className="flex items-center">
              <p className="text-[10px] md:text-sm">Powered by</p>
              <img src={Logo} alt="" className="h-10 md:h-14 -ml-2 " />
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
