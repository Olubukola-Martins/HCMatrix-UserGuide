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
  getSpecificSubcategory,
  getSpecificLeastSubcategory,
} from "../../../state/admin/adminData/dataSlice";

import { Select } from "antd";

import {
  getMainCategory,
  getSubCategories,
} from "../../../state/admin/adminData/thunkFunctions";

const NewArticleModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mainCategories, subcategories, leastSubcategories } = useSelector(
    (store) => store.adminData
  );

  useEffect(() => {
    dispatch(getMainCategory());
  }, []);

  const initial = {
    articleTitle: "",
    articleDescription: "",
  };

  const [inputFields, setInputFields] = useState(initial);
  const { articleTitle, articleDescription } = inputFields;

  const textChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Arrays
  const { categories } = useSelector((store) => store.adminData);
  const [_, setSubcategories] = useState([]);
  const [o, setLeastSubcategories] = useState([]);

  // States
  const [category, setCategory] = useState("select category");
  const [subcategory, setSubcategory] = useState("select subcategories");
  const [leastSubcategory, setLeastSubcategory] = useState(
    "select lease subcategories"
  );

  const [mainId, setMainId] = useState("");
  const [subId, setSubId] = useState("");
  const [least, setLeastId] = useState("");

  useEffect(() => {
    const id = Number(mainId);
    setSubId("");
    dispatch(getSpecificSubcategory(id));
  }, [mainId]);

  useEffect(() => {
    const id = Number(subId);
    dispatch(getSpecificLeastSubcategory(id));
  }, [mainId, subId]);

  const onClickHandler = () => {
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
    };

    if (formValidation(form)) {
      dispatch(populateNewArticle(form));
      dispatch(newArticleModalToggle());
      dispatch(headerToggle({ page: "article" }));
      navigate("/admin/create");
    }
  };

  // Cascading Form Input logic
  const changeCategory = (event) => {
    setCategory(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedCategoryId = selectedOption.getAttribute("id");
    setMainId(selectedCategoryId);
  };

  const changeSubcategory = (event) => {
    setSubcategory(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedCategoryId = selectedOption.getAttribute("id");
    setSubId(selectedCategoryId);
  };

  const changeLeastSubcategory = (event) => {
    setLeastSubcategory(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedCategoryId = selectedOption.getAttribute("id");
    setLeastId(selectedCategoryId);
  };

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-[9999] flex items-center  justify-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10 "
        onClick={() => onClickHandler()}
      ></div>

      {/* The form Container */}
      <div className="relative form border-3 rounded-2xl pr-4 z-20 bg-white w-2/5 max-w-[600px]  overflow-y-scroll pl-6 px-5 pb-5 shadow-lg my-6 ">
        {/* For The Effect */}
        <div className="h-[20px] w-[37%] fixed bg-white"></div>

        <form className="w-full" onSubmit={onSubmitHandler}>
          <h3 className="font-semibold text-lg mb-4 mt-4">
            Create New Article
          </h3>

          {/* Category input */}
          <FormContainer label="Select category">
            <select
              className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
              value={category}
              onChange={changeCategory}
            >
              <option disabled>Select Category</option>
              {mainCategories?.map((category, index) => {
                return (
                  <option className="" key={category.id} id={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>

            <Select
              size={"middle"}
              defaultValue="a1"
              onChange={changeCategory}
              style={{
                width: "100%",
              }}
              options={options}
            />
          </FormContainer>

          {/* Sub category */}

          {subcategories.length > 0 && (
            <FormContainer label="Select subcategory">
              <select
                className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
                value={subcategory}
                onChange={changeSubcategory}
              >
                <option disabled>Select subcategory</option>
                {subcategories?.map((sub, index) => {
                  if (sub?.parentId === Number(mainId)) {
                    return (
                      <option key={index} id={sub.id}>
                        {sub.name}
                      </option>
                    );
                  }
                })}
              </select>
            </FormContainer>
          )}

          {/* least category */}
          {leastSubcategories.length > 0 && (
            <FormContainer label="Select least category (optional)">
              <select
                className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
                value={leastSubcategory}
                onChange={changeLeastSubcategory}
              >
                <option>Select least subcategory</option>
                {leastSubcategories.map((least) => {
                  return (
                    <option key={least.id} id={least.id}>
                      {least.name}
                    </option>
                  );
                })}
              </select>
            </FormContainer>
          )}

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
