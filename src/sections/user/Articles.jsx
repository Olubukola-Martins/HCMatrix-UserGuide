import {
  Back,
  Container,
  NavMenu,
  SectionContainer,
  Card,
  CardWrapper,
} from "../../components/user";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { NoData } from "../../components/common";
import { getCategoryArticlesUser } from "../../state/user/userData/thunkFunction";
import { useDispatch, useSelector } from "react-redux";
import { resetHandler } from "../../state/user/userData/userData";
import { cardPlaceholder } from "../../data/data";

const Articles = () => {
  const dispatch = useDispatch();
  const { category: id, subcategory: sub, nestedCategory } = useParams();
  const { articles, ids, isLoading } = useSelector((store) => store.userData);

  useEffect(() => {
    dispatch(
      getCategoryArticlesUser(
        ids.least !== "" ? ids.least : ids.sub !== "" ? ids.sub : ids.main
      )
    );
    dispatch(resetHandler("articles"));
  }, []);

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
          <span className="text-[12px] md:text-sm text-customGray-semiDark">
            {articles?.length} Articles
          </span>
        </header>
        <CardWrapper
          empty={isLoading ? false : articles.length < 1 ? true : false}
        >
          {isLoading ? (
            cardPlaceholder.map((dummy, index) => {
              return (
                <Card
                  key={index}
                  title={dummy.title}
                  description={dummy.description}
                  className={`skeleton`}
                />
              );
            })
          ) : articles.length > 0 ? (
            articles?.map((article, index) => {
              return (
                <Card
                  key={index}
                  mainCategory={id}
                  subcategory={sub}
                  nestedCategory={nestedCategory}
                  title={article?.title.toLowerCase()}
                  description={`Learn about ${article?.title.toLowerCase()}`}
                  articleId={article.id}
                />
              );
            })
          ) : (
            <NoData msg={"No Articles Found!"} />
          )}
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};

export default Articles;
