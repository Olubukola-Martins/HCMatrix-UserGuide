import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newCategoryDataHandler } from "../../../state/admin/adminData/adminData";

import { toast } from "react-toastify";
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
  getAllCategories,
  createNewCategory,
} from "../../../state/admin/adminData/thunkFunctions";
import {
  Input,
  DataListInput,
  EmojiPicker,
  TextArea,
} from "../../../components/common";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const { allCategories, loadingAddCategory, addNew, mainCategories } =
    useSelector((store) => store.adminData);

  const { categoryName, description, emojiId, parentName } = addNew;

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);


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
    dispatch(getAllCategories());
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <main className="font-semibold text-customGray-dark text-[15px]">
        <Container>
          <Layout>
            {/* To be changed */}
            <SidePanel>
              <div className="w-full h-full flex flex-col gap-4">
                <div>
                  <h3 className=" font-bold mb-4">Creating new Categories</h3>
                  <p className="text-[12px] leading-6 font-medium text-customGray-light">
                    Crafting new categories is a breeze. Simplify your approach
                    with clear categories. Organize effortlessly for better
                    navigation. Start creating categories today now!
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Categories</h3>
                  <div className="flex flex-col gap-4 capitalize">
                    {mainCategories.map((category) => (
                      <div
                        className="flex items-center gap-3 cursor-pointer ml-4"
                        key={category.name}
                      >
                        <span className="text-lg">{category?.emoji?.code}</span>

                        <p className="text-md text-customGray-light  ">
                          {category.name}
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
                <Wrapper padding="pt-6 pb-6 px-4 md:pl-8">
                  <FormContainer bold={true} label={`Parent Category name`}>
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

                <Wrapper padding="py-6 px-4 md:pl-8 flex flex-col gap-2">
                  <FormContainer bold={true} label={`Category name`}>
                    <Input
                      onChange={onChangeHandler}
                      name="categoryName"
                      value={categoryName}
                      placeholder="Enter category Name...."
                      className=" w-[90%] lg:w-[60%] py-4 text-[12px]"
                    />
                  </FormContainer>

                  <FormContainer bold={true} label={`description`}>
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
