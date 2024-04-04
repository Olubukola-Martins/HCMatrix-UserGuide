import { JoditEditorComponent } from "../../../components/admin/JoditEditor";
import { heroImg } from "../../../assets/common/images";
import { Container, SectionContainer } from "../../../components/user";
import { BtnLayoutAdmin } from "../../../components/admin";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { addContent } from "../../../state/admin/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { publish, cancel } from "../../../assets/admin/icons/articles";
import { articleContentHandler } from "../../../state/admin/articleSlice";

const CreateArticle = ({ margin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content } = useSelector((store) => store.article);

  const cancelHandler = () => {
    navigate("/admin/dashboard");
  };

  const publishHandler = () => {
    dispatch(addContent(content));
  };

  const onChangeHandler = (value) => {
    dispatch(articleContentHandler(value));
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

            <JoditEditorComponent
              setContent={onChangeHandler}
              content={content}
            />
          </form>
        </SectionContainer>
      </Container>
    </>
  );
};
export default CreateArticle;
