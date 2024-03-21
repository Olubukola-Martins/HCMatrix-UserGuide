import { JoditEditorComponent } from "../../../components/admin/JoditEditor";
import HeroImg from "../../../assets/common/images/heroImg.png";
import { Container, SectionContainer } from "../../../components/user";
import { BtnLayoutAdmin, EmojiPicker } from "../../../components/admin";
import { useNavigate } from "react-router-dom";
// import { Novel } from "../../../components/admin";
// import { Tiptap } from "../../../components/admin";
import { useEffect, useState } from "react";

const CreateArticle = ({ margin }) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  //Emoji Picker
  const emojiClickHandler = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
  };

  const cancelHandler = () => {
    navigate("/admin/dashboard");
  };

  const onSubmitHandler = () => {
    console.log(content);
  };

  const onChangeHandler = (value) => {
    setContent(value);
  };

  return (
    <>
      <section
        className="bg-cover bg-center relative text-primary h-96 pt-7"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <nav
          className={`md:max-w-[calc(100%-8rem)]  max-w-[90%]  mx-auto font-body mb-32 z-50 relative flex justify-between`}
        >
          <BtnLayoutAdmin onClickHandler={cancelHandler}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Cancel</span>
          </BtnLayoutAdmin>

          <BtnLayoutAdmin onClickHandler={onSubmitHandler}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7.85L5.125 9.725C4.925 9.925 4.68767 10.021 4.413 10.013C4.13833 10.005 3.90067 9.90067 3.7 9.7C3.51667 9.5 3.42067 9.26667 3.412 9C3.40333 8.73333 3.49933 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52933 7.625 4.488C7.74167 4.44667 7.86667 4.42567 8 4.425C8.13333 4.425 8.25833 4.446 8.375 4.488C8.49167 4.53 8.6 4.60067 8.7 4.7L12.3 8.3C12.5 8.5 12.596 8.73333 12.588 9C12.58 9.26667 12.484 9.5 12.3 9.7C12.1 9.9 11.8627 10.0043 11.588 10.013C11.3133 10.0217 11.0757 9.92567 10.875 9.725L9 7.85V15C9 15.2833 8.904 15.521 8.712 15.713C8.52 15.905 8.28267 16.0007 8 16C7.71667 16 7.47933 15.904 7.288 15.712C7.09667 15.52 7.00067 15.2827 7 15V7.85ZM0 4V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H14C14.55 0 15.021 0.196 15.413 0.588C15.805 0.98 16.0007 1.45067 16 2V4C16 4.28333 15.904 4.521 15.712 4.713C15.52 4.905 15.2827 5.00067 15 5C14.7167 5 14.4793 4.904 14.288 4.712C14.0967 4.52 14.0007 4.28267 14 4V2H2V4C2 4.28333 1.904 4.521 1.712 4.713C1.52 4.905 1.28267 5.00067 1 5C0.716667 5 0.479333 4.904 0.288 4.712C0.0966668 4.52 0.000666667 4.28267 0 4Z"
                fill="white"
              />
            </svg>

            <span>Publish</span>
          </BtnLayoutAdmin>
        </nav>
      </section>

      <Container margin={`mt-[-15rem]`}>
        <SectionContainer>
          <form action="">
            {/* <header className="mb-10 flex justify-start gap-5 ">
              <div>
                <h1 className="text-2xl font-semibold mb-1">
                  How to configure company settings?
                </h1>
                <p className="text-[#3A3A3A99] text-sm mb-4">
                  Learn about how to set up the company settings.
                </p>
                <p className="text-[#3A3A3A99] text-[15px]">
                  This guide will walk you through the quick and easy steps, so
                  you can start benefiting from all that HCMATRIX has to offer.
                  Let’s get started
                </p>
              </div>
              <div className="w-[22rem] bg-green-200 h-[15rem] border rounded-xl"></div>
            </header>  */}

            {/* <Editor /> */}

            <EmojiPicker pickEmoji={emojiClickHandler} />
            <JoditEditorComponent
              setContent={onChangeHandler}
              content={content}
            />

            {/* <Novel /> */}
            {/* <Tiptap /> */}
          </form>

          <div>{content}</div>
        </SectionContainer>
      </Container>
    </>
  );
};
export default CreateArticle;
