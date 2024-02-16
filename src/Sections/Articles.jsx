import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  Card,
  CardWrapper,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";
import { useEffect, useState } from "react";

const Articles = () => {
  const { category: id, subcategory: sub, nestedCategory } = useParams();

  const [articles, setArticles] = useState([]);

  const findArticles = () => {
    const category = categories.find(
      (category) => category.title.toLowerCase() === id.toLowerCase()
    );

    if (category) {
      const finder = category.articles.filter((article) => {
        if (nestedCategory) {
          return (
            article.nestedCategory.toLowerCase() ===
            nestedCategory.toLowerCase()
          );
        }

        if (!article.subcategories) {
          return true;
        }

        if (sub) {
          if (!article.nestedCategory) {
            return article.subcategories.toLowerCase() === sub.toLowerCase();
          }
        }
      });

      setArticles(finder);
    }
  };

  useEffect(() => {
    findArticles();
  }, [id, sub]);

  return (
    <Container>
      <NavMenu
        category={id}
        subcategory={sub}
        nestedCategory={nestedCategory}
      />
      <SectionContainer>
        <header className="flex justify-between">
          <Back
            home={sub ? false : true}
            subcategory={sub}
            category={id}
            nestedCategory={nestedCategory}
          />
          <span className="text-sm text-customGray-semiDark">
            {articles?.length} Articles
          </span>
        </header>
        <CardWrapper>
          {articles?.map((article, index) => {
            return (
              <Card
                key={index}
                mainCategory={id}
                subcategory={sub}
                nestedCategory={nestedCategory}
                title={article.title}
                description={article.description}
              />
            );
          })}
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};

export default Articles;
