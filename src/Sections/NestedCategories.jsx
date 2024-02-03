import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";
import { useEffect, useState } from "react";

const NestedCategories = () => {
  const { category: id, subcategory: sub } = useParams();
  console.log(id, sub);
  const [nested, setNested] = useState({});

  const findArticles = () => {
    const category = categories.find((category) => category.title === id);
    const nestedCategory = category.subCategories.find((item) => {
      if (item.title === sub) {
        return item;
      }
    });

    setNested(nestedCategory);
  };

  useEffect(() => {
    findArticles();
  }, [id, sub]);

  console.log("nested");

  return (
    <Container>
      <NavMenu category={id} subcategory={sub} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back
          // home={sub === "articles" ? true : false}
          // subCategory={sub}
          // category={id}
          />
          <span className="text-sm text-customGray-semiDark">
            {/* {articles?.length}  */}
            Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {nested?.category?.map((item, index) => {
            return (
              <Card
                key={index}
                mainCategory={id}
                subcategory={sub}
                nestedCategoryTitle={item.title}
                description={item.desc}
              />
            );
          })}
        </div>
      </SectionContainer>
    </Container>
  );
};
export default NestedCategories;
