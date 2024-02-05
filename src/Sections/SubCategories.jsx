import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
} from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/data";

const SubCategories = () => {
  const { category: id } = useParams();
  const navigate = useNavigate();

  const data = categories.find((category) => {
    return category.title === id;
  });

  const { subCategories } = data;

  console.log("SUB CATEGORY COMPONENT");
  console.log(id);

  return (
    <Container>
      <NavMenu category={id} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} category={id} />
          <span className="text-sm text-customGray-semiDark">
            <span>{subCategories?.length}</span>
            <span className="ml-2">
              {subCategories?.length < 2 ? "Category" : "Categories"}
            </span>
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {subCategories.map((item, index) => {
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
        </div>
      </SectionContainer>
    </Container>
  );
};
export default SubCategories;
