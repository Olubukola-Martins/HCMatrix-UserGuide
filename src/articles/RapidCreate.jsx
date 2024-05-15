import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publish, cancel } from "../assets/admin/icons/articles";
import {
  articleContentHandler,
  addContent,
} from "../state/admin/articles/articleSlice";
import { useNavigate } from "react-router-dom";
import { heroImg } from "../assets/common/images";

import { Container, SectionContainer } from "../components/user";
import { BtnLayoutAdmin } from "../components/admin";
import { ReactTyped } from "react-typed";

const RapidCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content } = useSelector((store) => store.article);

  const publishHandler = () => {
    dispatch(addContent(content));
  };

  const onChangeHandler = (value) => {
    dispatch(articleContentHandler(value));
  };

  const cancelHandler = () => {
    navigate("/admin/dashboard");
  };

  return (
    <>
      <section
        className="bg-cover bg-center relative text-primary h-96 pt-7"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <nav
          className={`md:max-w-[calc(100%-8rem)]  max-w-[90%]  mx-auto font-body mb-32 z-50 relative flex justify-between items-center`}
        >
          <BtnLayoutAdmin onClickHandler={cancelHandler}>
            <img src={cancel} alt="" />
            <span>Cancel</span>
          </BtnLayoutAdmin>

          <div className="text-[12px]">
            <ReactTyped
              loop
              strings={[
                "Want to use Emoji ?",
                "For WindowsOS: Press the Windows key and the period key (.)",
                "For macOS: Press Command (CMD) + Control (CTRL) + Spacebar",
              ]}
              typeSpeed={100}
              backSpeed={50}
            />
          </div>

          <BtnLayoutAdmin onClickHandler={publishHandler}>
            <img src={publish} alt="" />
            <span>Publish</span>
          </BtnLayoutAdmin>
        </nav>
      </section>

      <Container margin={`mt-[-15rem]`}>
        <SectionContainer>
          <form action="">
            <div>Working placeholder</div>
          </form>
        </SectionContainer>
      </Container>
    </>
  );
};
export default RapidCreate;
