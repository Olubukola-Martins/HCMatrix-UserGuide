import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
  CardWrapper,
} from "../../components/user";
import { useParams } from "react-router-dom";
import { categories } from "../../data/data";
import { useEffect, useState } from "react";

const NestedCategories = () => {
  const { category: id, subcategory: sub } = useParams();
  const [nested, setNested] = useState({});

  const findArticles = () => {
    const category = categories.find((category) => category.title === id);
    const nestedCategory = category.subcategories.find((item) => {
      if (item.title.toLowerCase() === sub.toLowerCase()) {
        return item;
      }
    });

    setNested(nestedCategory);
  };

  useEffect(() => {
    findArticles();
  }, [id, sub]);

  return (
    <Container>
      <NavMenu category={id} subcategory={sub} nested={true} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back
            subcategory={sub}
            category={id}
            nestedRoute="nested"
            info="nested clicking"
          />
          <span className="text-sm text-customGray-semiDark">
            {nested?.category?.length} Subcategories
          </span>
        </header>
        <CardWrapper>
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
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};
export default NestedCategories;
