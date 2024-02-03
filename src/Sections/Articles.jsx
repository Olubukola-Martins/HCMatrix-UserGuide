import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  Card,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/data";
import { useEffect, useState } from "react";

const Articles = () => {
  const { category: id, subcategory: sub, nestedCategory } = useParams();

  const [articles, setArticles] = useState([]);

  console.log(id, sub);

  const findArticles = () => {
    const category = categories.find((category) => category.title === id);

    if (category) {
      const finder = category.articles.filter((article) => {
        if (nestedCategory) {
          return article.nestedCategory === nestedCategory;
        }

        if (!article.subCategories) {
          return true;
        }

        if (sub) {
          // console.log(sub);
          return article.subCategories === sub;
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
            home={sub === "articles" ? true : false}
            subcategory={sub}
            category={id}
          />
          <span className="text-sm text-customGray-semiDark">
            {articles?.length} Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
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
        </div>
      </SectionContainer>
    </Container>
  );
};

export default Articles;
