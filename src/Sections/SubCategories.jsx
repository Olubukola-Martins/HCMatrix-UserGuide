import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
  CardWrapper,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";

const Subcategories = () => {
  const { category: id } = useParams();

  const data = categories.find((category) => {
    return category.title.toLowerCase() === id.toLowerCase();
  });

  const { subcategories } = data;

  return (
    <Container>
      <NavMenu category={id} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} category={id} />
          <span className="text-sm text-customGray-semiDark">
            <span>{subcategories?.length}</span>
            <span className="ml-2">
              {subcategories?.length < 2 ? "Category" : "Categories"}
            </span>
          </span>
        </header>
        <CardWrapper>
          {subcategories.map((item, index) => {
            return (
              <Card
                key={index}
                mainCategory={id}
                subcategory={item.title}
                description={item.description}
                nestedCategory={item.category}
              />
            );
          })}
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};
export default Subcategories;
