import { FaSpinner } from "react-icons/fa";
import { JoditEditorComponent } from "../../../components/admin/JoditEditor";
import { heroImg } from "../../../assets/common/images";
import { Container, SectionContainer } from "../../../components/user";
import { BtnLayoutAdmin } from "../../../components/admin";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { articleContentHandler } from "../../../state/admin/articles/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { publish, cancel } from "../../../assets/admin/icons/articles";
import { useEffect } from "react";
import { headerToggle } from "../../../state/admin/headerSlice";
import {
  clearNewArticle,
  clearContent,
} from "../../../state/admin/articles/articleSlice";
import {
  createNewArticle,
  editArticle,
} from "../../../state/admin/articles/thunkFunctions";
import { toast } from "react-toastify";

const CreateArticle = ({ margin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    content,
    editing,
    loading,

    newArticle,
    editingArticle,
  } = useSelector((store) => store.article);

  useEffect(() => {
    dispatch(headerToggle({ page: "article" }));
  }, []);

  const cancelHandler = () => {
    dispatch(clearContent());
    dispatch(clearNewArticle());
    navigate("/admin/dashboard");
  };

  const publishHandler = () => {
    if (content === "") {
      toast.error("You cannot leave page empty");
      return;
    }

    editing
      ? dispatch(editArticle(editingArticle))
      : dispatch(createNewArticle(newArticle));

    if (content === "" && loading === false) {
      navigate("/admin/dashboard");
    }
  };

  const onChangeHandler = (value) => {
    dispatch(articleContentHandler(value));
  };

  return (
    <>
      <section
        className="bg-cover bg-center relative text-primary h-96 pt-7 -mt-[6.5rem]"
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
            {loading ? (
              <FaSpinner className="animate-spin text-sm" size={22} />
            ) : (
              <img src={publish} alt="" />
            )}

            <span>Publish</span>
          </BtnLayoutAdmin>
        </nav>
      </section>

      <Container margin={`mt-[-15rem]`}>
        <SectionContainer>
          <form action="">
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
