import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
  CardWrapper,
} from "../../components/user";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNestedCategory } from "../../state/user/userData/userData";
import { cardPlaceholder } from "../../data/data";

const NestedCategories = () => {
  const dispatch = useDispatch();
  const [nested, setNested] = useState([]);

  const { category: id, subcategory: sub } = useParams();
  const { ids, leastCategoriesUser, isLoading } = useSelector(
    (store) => store.userData
  );

  useEffect(() => {
    dispatch(getNestedCategory(ids.sub));
  }, []);

  return (
    <Container>
      <NavMenu category={id} subcategory={sub} nested={true} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back
            subcategory={sub}
            category={id}
            nestedRoute="nested"
            info="nested clicking"
          />
          <span className="text-sm text-customGray-semiDark">
            {leastCategoriesUser?.length} Subcategories
          </span>
        </header>
        <CardWrapper>
          {isLoading
            ? cardPlaceholder.map((dummy, index) => {
                return (
                  <Card
                    key={index}
                    title={dummy.title}
                    description={dummy.description}
                    className={`skeleton`}
                  />
                );
              })
            : leastCategoriesUser?.map((least, index) => {
                return (
                  <Card
                    id={least.id}
                    type={"least"}
                    key={index}
                    mainCategory={id}
                    subcategory={sub}
                    nestedCategoryTitle={least.name}
                    description={least.description}
                  />
                );
              })}
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};
export default NestedCategories;
