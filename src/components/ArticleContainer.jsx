import Container from "./Container";
import SectionContainer from "./SectionContainer";
import NavMenu from "./NavMenu";
import Back from "./Back";
import { Outlet, useParams } from "react-router-dom";
import ReviewBox from "./ReviewBox";

const ArticleContainer = () => {
  const { article, articles } = useParams();

  return (
    <Container>
      <NavMenu article={article} articles={articles} />
      <SectionContainer>
        <Back route={articles} />
        <Outlet />
        <div>this is such a div and this</div>
        <ReviewBox />
      </SectionContainer>
    </Container>
  );
};
export default ArticleContainer;
