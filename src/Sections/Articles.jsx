import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  Card,
} from "../components";
import { useParams } from "react-router-dom";
// import { categories } from "../data/data";

import { categoryData } from "../data/data3";

const Articles = () => {
  const { id, articles } = useParams();

  const data = categoryData
    .find((category) => {
      return category.pageTitle === id;
    })
    .categories.find((item) => {
      return item.categoryName === articles;
    }).subCategories;

  console.log(data);

  const article = [];

  return (
    <Container>
      <NavMenu articles={articles} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} />
          <span className="text-sm text-customGray-semiDark">
            {data.length} Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.subCategoryName}
                description={item.subCategoryDescription}
                data={item.article}
              />
            );
          })}
        </div>
      </SectionContainer>
    </Container>
  );
};
export default Articles;
