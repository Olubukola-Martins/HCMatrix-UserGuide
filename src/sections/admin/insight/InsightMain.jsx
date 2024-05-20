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

const InsightMain = () => {
  const { singleCategory, mainCategoryId } = useSelector(
    (store) => store.adminData
  );

  const dispatch = useDispatch();
  const { svg, title, articles } = singleCategory;

  useEffect(() => {
    dispatch(getCategoryArticles(mainCategoryId));
  }, [mainCategoryId]);

  return (
    <main className="font-semibold text-customGray-dark text-[15px]">
      <Container>
        <Layout>
          {/* Side Panel */}
          <SideMenu title="Articles Feedback" page="insight" />

          {/* Main Body */}
          <MainContent>
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
