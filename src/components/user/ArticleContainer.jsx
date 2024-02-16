import Container from "./Container";
import SectionContainer from "./SectionContainer";
import NavMenu from "./NavMenu";
import Back from "./Back";
import { Outlet, useParams } from "react-router-dom";
import ReviewBox from "./ReviewBox";

const ArticleContainer = () => {
  const { category, subcategory, nestedCategory, article } = useParams();

  return (
    <Container>
      <NavMenu
        category={category}
        subcategory={subcategory}
        nestedCategory={nestedCategory}
        article={article}
      />
      <SectionContainer>
        <Back
          category={category}
          subcategory={subcategory}
          nestedCategory={nestedCategory}
          article={article}
        />
        <Outlet />
        <ReviewBox />
      </SectionContainer>
    </Container>
  );
};
export default ArticleContainer;
