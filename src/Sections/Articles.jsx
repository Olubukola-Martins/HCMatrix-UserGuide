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
  const { category: id, subCategory: sub } = useParams();

  const [articles, setArticles] = useState([]);

  const findArticles = () => {
    const category = categories.find((category) => category.title === id);

    if (category) {
      const finder = category.articles.filter((article) => {
        if (sub === "articles") {
          return true;
        } else {
          return article.subCategories === sub;
        }
      });

      setArticles(finder);
    }
  };

  useEffect(() => {
    findArticles();
  }, [id, sub]);

  console.log(sub);

  return (
    <Container>
      <NavMenu category={id} subCategory={sub} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back
            home={sub === "articles" ? true : false}
            subCategory={sub}
            category={id}
          />
          <span className="text-sm text-customGray-semiDark">
            {articles?.length} Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {articles?.map((article, index) => {
            console.log(article);
            return (
              <Card
                key={index}
                category={id}
                subCategory={sub}
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
