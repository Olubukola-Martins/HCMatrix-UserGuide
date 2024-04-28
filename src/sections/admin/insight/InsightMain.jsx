import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Container,
  SideMenu,
  DashBoardHeader,
  ArticleReviewBox,
} from "../../../components/admin";
import { Layout, MainContent } from "../../../components/admin/layout";

const InsightMain = () => {
  const { singleCategory } = useSelector((store) => store.adminData);
  const dispatch = useDispatch();
  const { svg, title, articles } = singleCategory;

  useEffect(() => {}, []);

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
            {articles?.length ? (
              <ArticleReviewBox type="insight" />
            ) : (
              <div></div>
            )}
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default InsightMain;
