import Container from "./Container";
import SectionContainer from "./SectionContainer";
import NavMenu from "./NavMenu";
import Back from "./Back";
import { Outlet, useParams } from "react-router-dom";
import ReviewBox from "./ReviewBox";

const ArticleContainer = () => {
  const { category, subCategory, articles } = useParams();
  console.log(category, subCategory, articles);

  return (
    <Container>
      <NavMenu
        category={category}
        subCategory={subCategory}
        articles={articles}
      />
      <SectionContainer>
        <Back
          category={category}
          subCategory={subCategory}
          articles={articles}
        />
        <Outlet />
        <ReviewBox />
      </SectionContainer>
    </Container>
  );
};
export default ArticleContainer;
