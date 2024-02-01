import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  ArticleCard,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";

const Articles = () => {
  const { articles } = useParams();

  const article = categories.find((category) => {
    return category.title === articles;
  }).articles;

  return (
    <Container>
      <NavMenu articles={articles} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} />
          <span className="text-sm text-customGray-semiDark">
            {article.length} Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {article.map((item, index) => {
            return (
              <ArticleCard key={index} article={item} category={articles} />
            );
          })}
        </div>
      </SectionContainer>
    </Container>
  );
};
export default Articles;
