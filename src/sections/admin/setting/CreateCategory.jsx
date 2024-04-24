import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  newCategoryDataHandler,
} from "../../../state/admin/categories/categorySlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import {
  Container,
  Wrapper,
  Button,
  FormContainer,
} from "../../../components/admin";
import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";

import {
  getEveryCategory,
  createNewCategory,
} from "../../../state/admin/categories/thunkFunctions";
import {
  Input,
  DataListInput,
  EmojiPicker,
  TextArea,
} from "../../../components/common";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const { allCategories, loadingAddCategory, addNew } = useSelector(
    (store) => store.adminData
  );

  const { categoryName, description, emojiId, parentName } = addNew;

  useEffect(() => {
    dispatch(getEveryCategory());
    dispatch(getAllCategories({ page: "settings" }));
  }, []);

  const { category } = useSelector((store) => store.adminData);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    dispatch(newCategoryDataHandler({ value, name }));
  };

  const categoryCreationHandler = (e) => {
    e.preventDefault();

    if (!description || !categoryName) {
      toast.error("Empty fields detected");
      return;
    }

    dispatch(createNewCategory(addNew));
  };

  return (
    <>
      <ToastContainer />
      <main className="font-semibold text-customGray-dark text-[15px]">
        <Container>
          <Layout>
            {/* To be changed */}
            <SidePanel>
              <div className="w-full h-full flex flex-col gap-4">
                <div>
                  <h3 className=" font-bold mb-4">Creating new Categories</h3>
                  <p className="text-[12px] leading-6 font-medium text-customGray-light">
                    Lorem ipsum dolor sit amet consectetur. Ornare risus
                    praesent id amet faucibus aliquam turpis. Vulputate etiam
                    imperdiet metus laoreet sed eu neque.{" "}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Categories</h3>
                  <div className="flex flex-col gap-4 capitalize">
                    {category.map((category) => (
                      <div
                        className="flex gap-3 cursor-pointer ml-4"
                        key={category.title}
                      >
                        <img src={category.svg} alt="" width={24} height={24} />
                        <p className="text-md text-customGray-light  ">
                          {category.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SidePanel>

            <MainContent>
              <form
                className="flex flex-col gap-5"
                onSubmit={categoryCreationHandler}
              >
                <Wrapper padding="pt-5 pb-4 pl-8">
                  <FormContainer>
                    <DataListInput
                      category={allCategories}
                      onChange={onChangeHandler}
                      name="parentName"
                      value={parentName}
                      placeholder="Select Parent Category (Optional)"
                      className="w-[90%] lg:w-[60%]"
                    />
                  </FormContainer>
                </Wrapper>

                <Wrapper padding="py-8 pl-8 flex flex-col gap-2">
                  <FormContainer>
                    <Input
                      onChange={onChangeHandler}
                      name="categoryName"
                      value={categoryName}
                      placeholder="Enter category Name...."
                      className=" w-[90%] lg:w-[60%] py-4 text-[12px]"
                    />
                  </FormContainer>

                  <FormContainer>
                    <TextArea
                      placeholder="Enter description..."
                      value={description}
                      name="description"
                      onChange={onChangeHandler}
                      className="w-[90%] lg:w-[60%] py-4 text-[12px] "
                    />
                  </FormContainer>

                  {!parentName && (
                    <EmojiPicker
                      onChange={onChangeHandler}
                      name="emojiId"
                      value={emojiId}
                      className=" w-[90%] lg:w-[60%] py-4 text-[12px]"
                    />
                  )}
                </Wrapper>

                <Button
                  message={"create category"}
                  loading={loadingAddCategory}
                />
              </form>
            </MainContent>
          </Layout>
        </Container>
      </main>
    </>
  );
};
export default CreateCategory;
