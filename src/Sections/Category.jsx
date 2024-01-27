import { CategoryCard, Container, NavMenu } from "../components";
import { categories } from "../data/data";

const Category = () => {
  return (
    <Container style="mb-32 mt-[-8rem] z-50 relative">
      <NavMenu />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {categories.map((category) => {
          return <CategoryCard key={category.title} category={category} />;
        })}
      </div>
    </Container>
  );
};
export default Category;
