import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
} from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/new";
import { useEffect, useState, useLayoutEffect } from "react";

const SubCategories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articleRoute, setArticleRoute] = useState("article");

  const data = categories.find((category) => {
    return category.title === id;
  });

  const { subCategories } = data;

  console.log(subCategories);

  if (!subCategories) {
    return navigate(`/${id}/${articleRoute}`);
  }

  useLayoutEffect(() => {
    if (!subCategories) {
      console.log("worked fine");
      navigate(`/${id}/${articleRoute}`);
    }
  }, [subCategories, navigate, id, articleRoute]);

  const articles = [];
  return (
    <Container>
      <NavMenu articles={articles} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} />
          <span className="text-sm text-customGray-semiDark">
            <span>{subCategories?.length}</span>
            <span className="ml-2">
              {subCategories?.length < 2 ? "Category" : "Categories"}
            </span>
          </span>
        </header>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {subCategories.map((item, index) => {
            const { title, description } = item;
            return (
              <div key={index}>title</div>
              // <Card
              //   key={index}
              //   data={item}
              //   categoryId={id}
              //   name={name}
              //   description={description}
              // />
            );
          })}
        </div>
      </SectionContainer>
    </Container>
  );
};
export default SubCategories;
