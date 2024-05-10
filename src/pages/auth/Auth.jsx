import { Outlet } from "react-router-dom";
import { heroImg } from "../../assets/common/images";
import { Container, SectionContainer } from "../../components/user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "../../assets/admin/images";

const Auth = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Hero /> */}
      <section
        className="bg-cover bg-center relative text-primary h-96 pt-7"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <nav
          className={`md:max-w-[calc(100%-8rem)]  max-w-[90%]  mx-auto font-body mb-32 z-50 relative flex justify-between items-center`}
        ></nav>
      </section>

      <Container margin={`mt-[-19rem]`}>
        <h1 className="mx-auto  text-center -mt-5 mb-5 text-[#FFFFFFB2] font-semibold">
          HCMatrix User Guide{" "}
        </h1>
        <SectionContainer>
          <div className="py-10 flex items-center justify-center border rounded-md mb-2">
            {children}
          </div>

          <div className="flex items-center justify-center">
            <span className="text-sm -mr-2">Powered by</span>
            <img src={Logo} alt="" className="h-9" />
          </div>
        </SectionContainer>
      </Container>
    </>
  );
};
export default Auth;
