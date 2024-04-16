import { useSelector } from "react-redux";
import { Accordion, Container } from "../../../components/admin";

import { Logo } from "../../../assets/admin/images";

import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";

import { idea } from "../../../assets/admin/icons/settings";

import { GlassDesign } from "../../../components/user";

import {
  articles,
  searchBar,
  preview,
} from "../../../assets/admin/icons/settings";

import { article } from "../../../assets/admin/images/settings";

import { Toggler } from "../../../components/admin";

import Home from "../../../pages/user/Home";

import HeroImg from "../../../assets/common/images/heroimg.png";

const Customization = () => {
  const {
    toggler: toggle,
    accordion,
    contactBtn,
  } = useSelector((store) => store.customization);

  const { badge } = useSelector((store) => store.customization);

  return (
    <Container>
      <Layout gap="gap-[5rem]">
        <MainContent className="flex-1 bg-white rounded-lg py-4 px-4">
          {accordion.map((content) => {
            return <Accordion key={content?.id} {...content} />;
          })}
          {toggle.map((action, index) => {
            return <Toggler key={index} {...action} />;
          })}
        </MainContent>

        <SidePanel width={`w-[35%] `}>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-2 items-center">
              <img src={preview} alt="preview icon" />
              <span className="text-[#3A3A3A80] text-[15px]">Preview</span>
            </div>
            <hr className="border flex-grow" />
          </div>

          <div className="border w-full pb-5 bg-white rounded-xl overflow-hidden relative">
            <section
              className="bg-cover bg-center relative text-primary h-52"
              style={{ backgroundImage: `url(${HeroImg})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>

              <Container margin="mb-0 py-20 border-red-500 ">
                <div className="pt-5 border-white relative">
                  <img
                    src={Logo}
                    alt=""
                    className="inline-block  absolute left-0 h-5"
                  />

                  {contactBtn && (
                    <GlassDesign className="inline-block rounded-xl px-5 py-1 absolute right-0  cursor-pointer">
                      <p className="text-[3px]">Contact Us</p>
                    </GlassDesign>
                  )}
                </div>

                <div className="w-[100%] md:w-[75%] absolute left-0 right-0 mx-auto mt-[3rem] flex flex-col items-center">
                  <div className="flex items-center mb-2 justify-center">
                    <h1 className="text-center text-white font-bold text-[10px] mr-2">
                      How can we help?
                    </h1>
                  </div>
                  <img src={searchBar} alt="" className="" />
                </div>
              </Container>
            </section>

            <div className="-mt-12 z-20 relative w-[85%] mx-auto">
              <p className=" z-20 text-[9px] capitalize mb-2 ml-3 text-[#FFFFFFB2] relative">
                All categories
              </p>

              {/* Image */}
              <img
                src={article}
                alt=""
                className="w-full "
                style={{ zIndex: 1 }}
              />
            </div>

            <section
              className={`${
                badge ? "flex" : "flex opacity-0"
              } items-center justify-center`}
            >
              <span className="text-[8px]">Powered by</span>
              <img src={Logo} alt="" className="h-5" />
            </section>
          </div>
        </SidePanel>
      </Layout>
    </Container>
  );
};
export default Customization;
