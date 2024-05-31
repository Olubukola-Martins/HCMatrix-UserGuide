import { useEffect } from "react";
import { CategoryCard, Container, NavMenu } from "../../components/user";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategoriesForUser } from "../../state/user/userData/thunkFunction";
import { resetHandler } from "../../state/user/userData/userData";
import { categoryCardPlaceholder } from "../../data/data";
import { SectionContainer, CardWrapper } from "../../components/user";
import { NoData } from "../../components/common";
import { getSettings } from "../../state/admin/customizationSlice";


const Category = () => {
  const dispatch = useDispatch();
  const { mainCategoriesUser, isLoading } = useSelector(
    (store) => store.userData
  );

  useEffect(() => {
    dispatch(getMainCategoriesForUser());
    dispatch(getSettings());
    dispatch(resetHandler("main"));
  }, []);

  return (
    <Container>
      <NavMenu />
      <div
        className={` ${
          mainCategoriesUser.length === 0 && !isLoading
            ? ""
            : "grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5"
        }`}
      >
        {isLoading ? (
          categoryCardPlaceholder.map((dummy, index) => {
            return (
              <CategoryCard
                isLoading={isLoading}
                key={index}
                category={dummy}
                className={`skeleton`}
              />
            );
          })
        ) : mainCategoriesUser.length > 0 ? (
          mainCategoriesUser?.map((category, index) => {
            return (
              <div key={index} className="flex justify-center">
                <CategoryCard category={category} />
              </div>
            );
          })
        ) : (
          <SectionContainer className="border">
            <CardWrapper empty={true}>
              <NoData msg={"No category Found!"} />
            </CardWrapper>
          </SectionContainer>
        )}
      </div>
    </Container>
  );
};
export default Category;
