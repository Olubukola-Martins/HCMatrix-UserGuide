import { CategoryCard, Container, NavMenu } from "../components";
// import { categories } from "../data/data";
import { categoryData } from "../data/data3";

const Category = () => {
  return (
    <Container>
      <NavMenu />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {categoryData.map((category) => {
          return <CategoryCard key={category.pageTitle} category={category} />;
        })}
      </div>
    </Container>
  );
};
export default Category;
