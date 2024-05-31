import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Container,
  SideMenu,
  DashBoardHeader,
  ArticleReviewBox,
} from "../../../components/admin";
import { Layout, MainContent } from "../../../components/admin/layout";
import { getCategoryArticles } from "../../../state/admin/articles/thunkFunctions";
import { useDebouncedCallback } from "use-debounce";
import { Wrapper } from "../../../components/admin";
import Input from "antd/es/input/Input";
import { Search } from "../../../assets/admin/icons/dashboard";

const InsightMain = () => {
  const { singleCategory, mainCategoryId } = useSelector(
    (store) => store.adminData
  );

  const dispatch = useDispatch();
  const { svg, title, articles } = singleCategory;

  useEffect(() => {
    dispatch(getCategoryArticles(mainCategoryId));
  }, [mainCategoryId]);

  const debouncedOnChange = useDebouncedCallback(() => {
    dispatch(filterSubArticles(searchInput));
  }, 500);

  return (
    <main className="font-semibold text-customGray-dark text-[15px] md:mt-0">
      <Container>
        <Layout>
          {/* Side Panel */}
          <SideMenu title="Articles Feedback" page="insight" />

          {/* Main Body */}
          <MainContent>
            {/* Search input */}
            <Wrapper padding={"py-2"} className="mb-4 bg-white rounded-lg">
              <section className="flex pl-6 gap-3 items-center">
                <Search />
                <Input
                  variant="borderless"
                  style={{
                    width: "99%",
                    border: "none",
                  }}
                  placeholder="Search for article"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    debouncedOnChange.call();
                  }}
                />
              </section>
            </Wrapper>
            {/* Header */}
            <DashBoardHeader title={title} svg={svg} articles={articles} />

            <ArticleReviewBox type="insight" />
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default InsightMain;
