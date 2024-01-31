import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
} from "../components";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/data3";

const SubCategories = () => {
  const { id } = useParams();

  const data = categoryData.find((category) => {
    return category.pageTitle === id;
  });

  const { categories } = data;

  const articles = [];
  return (
    <Container>
      <NavMenu articles={articles} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} />
          <span className="text-sm text-customGray-semiDark">
            <span>{categories.length}</span>
            <span className="ml-2">
              {categories.length < 2 ? "Category" : "Categories"}
            </span>
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {categories.map((item, index) => {
            const name = item.categoryName;
            const description = item.categoryDescription;
            return (
              <Card
                key={index}
                data={item}
                categoryId={id}
                name={name}
                description={description}
              />
            );
          })}
        </div>
      </SectionContainer>
    </Container>
  );
};
export default SubCategories;
