import { useDispatch, useSelector } from "react-redux";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";
import { useNavigate } from "react-router-dom";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect, useState } from "react";
import FormContainer from "../FormContainer";
import { populateNewArticle } from "../../../state/admin/articles/articleSlice";
import { formValidation } from "../../../utils/formvalidator";
import { Input, TextArea, FormBtn } from "../../common";
import {
  getMainCategory,
  getSpecificSubcategory,
  getSpecificLeastSubcategory,
} from "../../../state/admin/adminData/dataSlice";

import { Select } from "antd";
// import { subCategories } from "../../../data/categories";

const NewArticleModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mainCategories, subcategories, leastSubcategories } = useSelector(
    (store) => store.adminData
  );

  useEffect(() => {
    dispatch(getMainCategory());
    dispatch(getSpecificSubcategory());
    dispatch(getSpecificLeastSubcategory());
  }, []);

  // Initial values for the state
  const initial = {
    articleTitle: "",
    articleDescription: "",
    videoLink: "",
  };

  const initCategory = { category: "", subcategory: "", leastSubcategory: "" };

  // The values of the category
  const [categoryValue, setCategoryValue] = useState(initCategory);
  const { category, subcategory, leastSubcategory } = categoryValue;

  // The values of the form input
  const [inputFields, setInputFields] = useState(initial);
  const { articleTitle, articleDescription, videoLink } = inputFields;

  const textChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputFields((prev) => {
      return { ...prev, [name]: value };
    });
  };



  const handleCategory = (id) => {
    dispatch(getSpecificSubcategory(id));
    dispatch(getSpecificLeastSubcategory(id));
  };

  const onClickHandler = () => {
    dispatch(newArticleModalToggle());
  };

  //onSubmit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("submitting");
    const form = {
      category: category,
      subcategory: subcategory,
      leastSubcategory: leastSubcategory,
      articleTitle: articleTitle,
      articleDescription: articleDescription,
    };

    // dispatch(populateNewArticle(form));
    // dispatch(newArticleModalToggle());
    // dispatch(headerToggle({ page: "article" }));
    // navigate("/admin/create");
  };

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-[99] flex items-center  justify-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10"
        onClick={() => onClickHandler()}
      ></div>

      {/* The form Container */}
      <div className="relative form border-3 rounded-2xl pr-4 z-20 bg-white w-2/5 max-w-[600px]  overflow-y-scroll pl-6 px-5 pb-5 shadow-lg my-6 ">
        {/* For The Effect */}
        {/* <div className="h-[20px] w-[37%] fixed bg-white"></div> */}

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
              className="md:flex hidden w-[full]"
              onChange={(value) => handleCategory(value)}
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
                className="md:flex hidden w-[full]"
                onChange={(value) =>
                  dispatch(getSpecificLeastSubcategory(value))
                }
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
                allowClear
                placeholder="Select Category"
                className="md:flex hidden w-[full]"
                onChange={(value) => console.log(value)}
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
              className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
              value={articleDescription}
              name="articleDescription"
              onChange={textChangeHandler}
            />
          </FormContainer>

          <div className="mb-3">
            <FormBtn />
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewArticleModal;
