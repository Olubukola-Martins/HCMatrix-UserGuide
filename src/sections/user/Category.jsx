import { CategoryCard, Container, NavMenu } from "../../components/user";

import { useSelector } from "react-redux";

const Category = () => {
  const { categories } = useSelector((store) => store.category);

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
