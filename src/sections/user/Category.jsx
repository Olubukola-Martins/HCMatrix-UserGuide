import { CategoryCard, Container, NavMenu } from "../../components/user";
import { categories } from "../../data/data";

const Category = () => {
  return (
    <Container>
      <NavMenu />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {categories.map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
      </div>
    </Container>
  );
};
export default Category;
