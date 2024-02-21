import {
  SideMenu,
  Container,
  DashBoardHeader,
} from "../../../components/admin";
import { Layout, MainContent } from "../../../components/admin/layout";
import { ArticleReviewBox } from "../../../components/admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../../state/admin/adminCategorySlice";

const Insight = () => {
  const { singleCategory } = useSelector((store) => store.adminCategory);
  const dispatch = useDispatch();
  const { svg, title, articles } = singleCategory;

  useEffect(() => {
    dispatch(getAllCategories({ page: "insight" }));
  }, []);

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
export default Insight;
