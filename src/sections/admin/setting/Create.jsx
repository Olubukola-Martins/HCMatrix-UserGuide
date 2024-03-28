import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../state/admin/adminDataSlice";
import {
  Container,
  Wrapper,
  Input,
  Tag,
  Button,
  Dropdown,
  AddBtn,
} from "../../../components/admin";
import { Layout, MainContent } from "../../../components/admin/layout";
import { SidePanel } from "../../../components/admin/layout";
import { wavingHand } from "../../../assets/user/categories";
import { add } from "../../../assets/admin/icons/settings";
import { Subcategories } from "../../user";
import { subCategories, leastSubCategories } from "../../../data/categories";

const Create = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({ page: "settings" }));
  }, []);

  const { category } = useSelector((store) => store.adminCategory);

  const [leastSubs, setLeastSubs] = useState(leastSubCategories);

  const [subs, setSubs] = useState(subCategories);
  

  return (
    <main className="font-semibold text-customGray-dark text-[15px]">
      <Container>
        <Layout>
          <SidePanel>
            <div className="w-full h-full flex flex-col gap-4">
              <div>
                <h3 className=" font-bold mb-4">Creating new Categories</h3>
                <p className="text-md leading-6 text-customGray-light">
                  Lorem ipsum dolor sit amet consectetur. Ornare risus praesent
                  id amet faucibus aliquam turpis. Vulputate etiam imperdiet
                  metus laoreet sed eu neque.{" "}
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
            <div className="flex flex-col gap-5">
              <Wrapper padding="py-6">
                <div className="div pl-8 flex flex-col gap-4">
                  <h3 className=" font-semibold text-md">Category Name</h3>
                  <Input
                    placeholder="Settings"
                    className=" w-[90%] lg:w-[60%] placeholder:text-customGray-semiDark"
                  />
                </div>
              </Wrapper>

              <div className="flex flex-col gap-6">
                <Wrapper padding="py-6">
                  <div className="flex gap-7 ">
                    <div className="pl-8 w-[35%] flex flex-col gap-4">
                      <h3 className=" font-semibold text-md">
                        Add Sub category
                      </h3>
                      <Input
                        placeholder="Self Service"
                        className=" max-w-[300px] max-md:w-[150px] max-md:text-sm    placeholder:text-customGray-semiDark py-[7px]"
                      />
                      <AddBtn />
                    </div>

                    <div className="flex-1 flex pr-8 flex-wrap gap-2 justify-start place-content-center max-lg:text-][10px] ">
                      {subs.map((sub) => (
                        <Tag key={sub} tagName={sub} />
                      ))}
                    </div>
                  </div>
                </Wrapper>
                <Button message={"save"} />
              </div>

              <div className="flex flex-col gap-5">
                <Wrapper padding="py-6">
                  <div className="flex gap-7">
                    <div className="pl-8 w-[35%] flex flex-col gap-4">
                      <h3 className=" font-semibold text-[15px]">
                        Add least sub category (Optional)
                      </h3>
                      <Dropdown />
                      <Input
                        placeholder="Document Settings"
                        className=" max-w-[300px] max-md:w-[150px] max-md:text-sm placeholder:text-customGray-semiDark py-[7px]"
                      />
                      <AddBtn />
                    </div>

                    <div className="flex-1 pr-8 flex flex-wrap justify-start gap-2 place-content-center max-lg:text-][10px] ">
                      {leastSubs.map((leastSub) => (
                        <Tag key={leastSub} tagName={leastSub} />
                      ))}
                    </div>
                  </div>
                </Wrapper>
                <Button message={"save settings"} />
              </div>
            </div>
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default Create;
