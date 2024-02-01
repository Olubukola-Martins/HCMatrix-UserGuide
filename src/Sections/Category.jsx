import { CategoryCard, Container, NavMenu } from "../components";
// import { categories } from "../data/data";
// import { categoryData } from "../data/data3";
import { categories } from "../data/new";

const Category = () => {
  return (
    <Container>
      <NavMenu />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {categories.map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
      </div>
    </Container>
  );
};
export default Category;
