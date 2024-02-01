import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  Card,
} from "../components";
import { useParams } from "react-router-dom";
import { categories } from "../data/new";
import { useEffect, useState } from "react";

// import { categories } from "../data/data";
// import { categoryData } from "../data/data3";

const Articles = () => {
  const { id, articles: data } = useParams();

  const [articles, setArticles] = useState([]);

  const findArticles = () => {
    const category = categories.find((category) => category.title === id);

    if (category) {
      const finder = category.articles.filter((article) => {
        if (data === "articles") {
          return true;
        } else {
          return article.subCategories === data;
        }
      });

      setArticles(finder);
    }
  };

  useEffect(() => {
    findArticles();
  }, [id, data]);

  console.log(articles);

  return (
    <Container>
      <NavMenu />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} />
          <span className="text-sm text-customGray-semiDark">
            {articles?.length} Articles
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {articles?.map((article, index) => {
            return (
              <Card
                key={index}
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
