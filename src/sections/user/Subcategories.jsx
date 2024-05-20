import {
  Container,
  NavMenu,
  SectionContainer,
  Back,
  Card,
  CardWrapper,
} from "../../components/user";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubcategoriesForUser } from "../../state/user/userData/thunkFunction";
import { useEffect } from "react";
import { resetHandler } from "../../state/user/userData/userData";
import { NoData } from "../../components/common";
import { cardPlaceholder } from "../../data/data";

const Subcategories = () => {
  const { category: id } = useParams();

  const dispatch = useDispatch();
  const { subcategoriesUser, ids, isLoading } = useSelector(
    (store) => store.userData
  );

  const { main } = ids;

  useEffect(() => {
    dispatch(getSubcategoriesForUser(main));
    dispatch(resetHandler("sub"));
  }, []);

  return (
    <Container>
      <NavMenu category={id} />
      <SectionContainer>
        <header className="flex justify-between">
          <Back home={true} category={id} />
          <span className="text-sm text-customGray-semiDark">
            <span>{subcategoriesUser?.length}</span>
            <span className="ml-2">
              {subcategoriesUser?.length < 2 ? "Category" : "Categories"}
            </span>
          </span>
        </header>
        <CardWrapper
          empty={
            isLoading ? false : subcategoriesUser.length < 1 ? true : false
          }
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
          ) : subcategoriesUser.length > 0 ? (
            subcategoriesUser.map((item, index) => {
              return (
                <Card
                  id={item.id}
                  type={item.type}
                  key={index}
                  mainCategory={id}
                  subcategory={item.name}
                  description={item.description}
                  nestedCategory={item.children}
                />
              );
            })
          ) : (
            <NoData msg={"Empty Category!"} />
          )}
        </CardWrapper>
      </SectionContainer>
    </Container>
  );
};
export default Subcategories;
