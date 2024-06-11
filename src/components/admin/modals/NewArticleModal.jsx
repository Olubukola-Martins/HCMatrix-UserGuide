import { useDispatch, useSelector } from "react-redux";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";
import { useNavigate } from "react-router-dom";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect, useState } from "react";
import FormContainer from "../FormContainer";
import {
  populateNewArticle,
  populateEditingArticle,
  reset,
} from "../../../state/admin/articles/articleSlice";
import { Input, TextArea, FormBtn } from "../../common";
import {
  getMainCategory,
  getSpecificSubcategory,
  getSpecificLeastSubcategory,
} from "../../../state/admin/adminData/adminData";

import { Select } from "antd";
import { toast } from "react-toastify";

const NewArticleModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Global States
  const { mainCategories, subcategories, leastSubcategories } = useSelector(
    (store) => store.adminData
  );
  // const { newArticleModal } = useSelector((store) => store.modelSlice);
  const { editing, editingArticle, loading } = useSelector(
    (store) => store.article
  );

  // Init values //
  // Initial values for the state
  const initial = {
    articleTitle: "",
    articleDescription: "",
    videoLink: "",
  };

  const initCategory = { category: "", subcategory: "", leastSubcategory: "" };

  // Module state //
  // The values of the category //
  const [categoryValue, setCategoryValue] = useState(initCategory);
  const { category, subcategory, leastSubcategory } = categoryValue;

  // The values of the form input //
  const [inputFields, setInputFields] = useState(initial);
  const { articleTitle, articleDescription, videoLink } = inputFields;

  useEffect(() => {
    if (!editing) {
      setInputFields(initCategory);
      setCategoryValue(initCategory);
    }
    dispatch(getMainCategory());
    dispatch(getSpecificSubcategory());
    dispatch(getSpecificLeastSubcategory());
  }, []);

  useEffect(() => {
    setInputFields({
      articleTitle: editingArticle?.title,
      articleDescription: editingArticle?.description,
      videoLink:
        editingArticle?.videoUrl === null ? "" : editingArticle?.videoUrl,
    });
  }, [editingArticle]);

  // Text change handler
  const textChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //Category handling function
  const handleCategory = (id) => {
    dispatch(getSpecificSubcategory(id));
    dispatch(getSpecificLeastSubcategory());
  };

  const onClickHandler = () => {
    dispatch(reset());
    dispatch(newArticleModalToggle());
  };

  //onSubmit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const form = {
      category: category,
      subcategory: subcategory,
      leastSubcategory: leastSubcategory,
      articleTitle: articleTitle,
      articleDescription: articleDescription,
      videoLink: videoLink,
    };

    const editForm = {
      articleTitle: articleTitle,
      articleDescription: articleDescription,
      videoLink: videoLink,
    };

    if (!editing && mainCategories.length > 0 && category === "") {
      toast.error("please select a category");
      return;
    }

    if (!editing && subcategories.length > 0 && subcategory === "") {
      toast.error("please select a subcategory");
      return;
    }

    if (!editing && leastSubcategories.length > 0 && leastSubcategory === "") {
      toast.error("please select least subcategory ");
      return;
    }

    if (articleTitle === "" || articleDescription === "") {
      toast.error("Empty fields detected");
      return;
    }

    editing
      ? dispatch(populateEditingArticle(editForm))
      : dispatch(populateNewArticle(form));

    dispatch(newArticleModalToggle());
    dispatch(headerToggle({ page: "article" }));
    navigate("/admin/create");
  };

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-[99] flex items-center justify-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30 blur-lg"
        onClick={() => onClickHandler()}
      ></div>

      {/* The form Container */}
      <div className="relative scrollWheel border-3 rounded-2xl z-20 bg-white w-[95%] sm:w-[60%] md:max-w-[550px] overflow-y-scroll p-5 shadow-lg -mt-8">
        {editing ? (
          <form className="w-full" onSubmit={onSubmitHandler}>
            <h3 className="font-semibold text-lg mb-3 mt-4">Edit Article</h3>

            {/* The video link */}
            <FormContainer label="Embedded video link (optional)">
              <Input
                type="text"
                name="videoLink"
                value={videoLink}
                onChange={textChangeHandler}
              />
            </FormContainer>

            {/* The input form */}
            <FormContainer label="Article Title">
              <Input
                type="text"
                name="articleTitle"
                value={articleTitle}
                onChange={textChangeHandler}
              />
            </FormContainer>

            {/* Add desc */}
            <FormContainer label="Article Description">
              <TextArea
                type="text"
                className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
                value={articleDescription}
                name="articleDescription"
                onChange={textChangeHandler}
              />
            </FormContainer>

            <div className="mb-3">
              <FormBtn loading={loading} />
            </div>
          </form>
        ) : (
          <form className="w-full" onSubmit={onSubmitHandler}>
            <h3 className="font-semibold text-lg mb-2 mt-4">
              Create New Article
            </h3>

            {/* Category input */}
            <FormContainer label="Select category">
              <Select
                size="large"
                allowClear
                placeholder="Select Category"
                className=" w-full"
                onChange={(value) => {
                  setCategoryValue((prev) => {
                    return {
                      category: value,
                      leastSubcategory: null,
                      subcategory: null,
                    };
                  });
                  handleCategory(value);
                }}
                options={mainCategories?.map((category) => {
                  return {
                    label: `${category?.name}`,
                    value: `${category?.id}`,
                  };
                })}
              />
            </FormContainer>

            {subcategories?.length > 0 && (
              <FormContainer label="Select subcategory">
                <Select
                  size="large"
                  allowClear
                  placeholder="Select Subcategories"
                  value={subcategory ?? undefined}
                  className="md:flex hidden w-[full]"
                  onChange={(value) => {
                    setCategoryValue((prev) => {
                      return {
                        ...prev,
                        subcategory: value,
                        leastSubcategory: null,
                      };
                    });
                    dispatch(getSpecificLeastSubcategory(value));
                  }}
                  options={subcategories?.map((category) => {
                    return {
                      label: `${category?.name}`,
                      value: `${category?.id}`,
                    };
                  })}
                />
              </FormContainer>
            )}

            {/* least category */}
            {leastSubcategories?.length > 0 && (
              <FormContainer label="Select Least Subcategory">
                <Select
                  size="large"
                  allowClear={true}
                  value={leastSubcategory ?? undefined}
                  placeholder="Select least subcategory"
                  className="md:flex hidden w-[full]"
                  onChange={(value) => {
                    setCategoryValue((prev) => {
                      return { ...prev, leastSubcategory: value };
                    });
                  }}
                  options={leastSubcategories?.map((category) => {
                    return {
                      label: `${category?.name}`,
                      value: `${category?.id}`,
                    };
                  })}
                />
              </FormContainer>
            )}

            {/* The video link */}
            <FormContainer label="Embedded video link (optional)">
              <Input
                type="text"
                name="videoLink"
                value={videoLink}
                onChange={textChangeHandler}
              />
            </FormContainer>

            {/* The input form */}
            <FormContainer label="Article Title">
              <Input
                type="text"
                name="articleTitle"
                value={articleTitle}
                onChange={textChangeHandler}
              />
            </FormContainer>

            {/* Add desc */}
            <FormContainer label="Article Description">
              <TextArea
                type="text"
                className="w-full py-3 px-4 overflow-y-auto scrollbar-hide rounded-lg border outline-none text-sm"
                value={articleDescription}
                name="articleDescription"
                onChange={textChangeHandler}
              />
            </FormContainer>

            <div className="mb-3">
              <FormBtn />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default NewArticleModal;
