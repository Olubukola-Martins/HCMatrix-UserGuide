import Container from "./Container";
import SectionContainer from "./SectionContainer";
import NavMenu from "./NavMenu";
import Back from "./Back";
import { Outlet, useParams } from "react-router-dom";
import ReviewBox from "./ReviewBox";
import { useSelector } from "react-redux";

const ArticleContainer = () => {
  const { category, subcategory, nestedCategory, article } = useParams();
  const { articleContent } = useSelector((store) => store.userData);

  console.log(category, subcategory, nestedCategory, article);

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

        {articleContent && <ReviewBox />}
      </SectionContainer>
    </Container>
  );
};
export default ArticleContainer;
