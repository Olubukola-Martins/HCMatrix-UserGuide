import { heroImg } from "../../assets/common/images";
import { Container, SectionContainer } from "../../components/user";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/admin/images";
import { useSelector } from "react-redux";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { headerStyle, settings } = useSelector((store) => store.customization);

  return (
    <>
      {/* <Hero /> */}
      <section
        className="bg-cover bg-center relative text-primary h-96 pt-7"
        style={{
          backgroundImage: `url(${headerStyle ? headerStyle : heroImg})`,
        }}
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
          <div className="pt-3 pb-3 md:py-10 flex flex-col items-center justify-center border-none md:border rounded-md mb-2">
            <div
              className={`relative w-[96%] xs:w-[70%] sm:w-[50%] md:w-[40%] `}
            >
              {children}
            </div>
          </div>
        </SectionContainer>
        <div className="flex items-center justify-center mt-10">
          <span className="text-[10px] font-bold -mr-2">Powered by</span>
          <img src={Logo} alt="" className="h-9" />
        </div>
      </Container>
    </>
  );
};
export default Auth;
