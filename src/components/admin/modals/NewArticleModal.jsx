import { useDispatch, useSelector } from "react-redux";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";
import { useNavigate } from "react-router-dom";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect, useState } from "react";
import { subCategories } from "../../../data/categories";
import FormContainer from "../FormContainer";
import { populateNewArticle } from "../../../state/admin/articleSlice";
import { formValidation } from "../../../utils/formvalidator";
import { Input, TextArea, FormBtn } from "../../common";

const NewArticleModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const { categories } = useSelector((store) => store.adminCategory);
  const [subcategories, setSubcategories] = useState([]);
  const [leastSubcategories, setLeastSubcategories] = useState([]);

  // States
  const [category, setCategory] = useState("select category");
  const [subcategory, setSubcategory] = useState("select subcategories");
  const [leastSubcategory, setLeastSubcategory] = useState(
    "select lease subcategories"
  );

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
    const subcategory = categories.find(
      (cat) => cat.title === event.target.value
    ).subcategories;

    setSubcategories(subcategory);

    if (subcategory) {
      setSubcategory("select subcategories");
      setLeastSubcategory("select least subcategories");
      setInputFields(initial);
    }

    if (!subcategory) {
      setSubcategory("");
      setLeastSubcategory("");
    }
  };

  const changeSubcategory = (event) => {
    setSubcategory(event.target.value);
    const leastSubcategory = subcategories.find(
      (sub) => sub.title === event.target.value
    ).category;
    setLeastSubcategories(leastSubcategory);
    if (leastSubcategory) {
      setLeastSubcategory("select least subcategories");
      setInputFields(initial);
    }

    if (!leastSubcategory) {
      setLeastSubcategory("");
    }
  };

  const changeLeastSubcategory = (event) => {
    setLeastSubcategory(event.target.value);
  };

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-10 flex items-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10 "
        onClick={() => onClickHandler()}
      ></div>

      {/* The form Container */}
      <div className="relative form border-3 rounded-2xl pr-4 z-20 bg-white w-2/5 h-[90%] overflow-y-scroll pl-6 px-5 shadow-lg my-6">
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
              <option>Select Category</option>
              {categories.map((category, index) => {
                return (
                  <option className="" key={index}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          </FormContainer>

          {/* Sub category */}
          {subcategories && (
            <FormContainer label=" Select subcategory">
              <select
                className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
                value={subcategory}
                onChange={changeSubcategory}
              >
                <option>Select subcategory</option>
                {subcategories.map((sub, index) => {
                  return <option key={index}>{sub.title}</option>;
                })}
              </select>
            </FormContainer>
          )}

          {/* least category */}
          {subcategories && leastSubcategories && (
            <FormContainer label="Select least category (optional)">
              <select
                className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
                value={leastSubcategory}
                onChange={changeLeastSubcategory}
              >
                <option>Select least subcategory</option>
                {leastSubcategories.map((least, index) => {
                  return <option>{least.title}</option>;
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
