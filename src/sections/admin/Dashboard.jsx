import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Layout, MainContent } from "../../components/admin/layout";
import {
  Container,
  Wrapper,
  ArticleReviewBox,
  DashBoardHeader,
} from "../../components/admin";
import { Search } from "../../assets/admin/icons/dashboard";
import { getAllCategories } from "../../state/admin/adminCategorySlice";
import { SideMenu } from "../../components/admin";

const Dashboard = () => {
  const { singleCategory } = useSelector((store) => store.adminCategory);
  const dispatch = useDispatch();
  const { svg, title, articles } = singleCategory;

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <main className="font-semibold text-customGray-dark text-[15px]">
      <Container>
        <h3 className="mb-3">Upload Articles</h3>
        <Layout>
          {/* Side Panel */}
          <SideMenu />

          {/* Main Body */}
          <MainContent>
            {/* Search input */}
            <Wrapper>
              <section className="flex pl-6 gap-3">
                <Search />
                <input
                  type="text"
                  placeholder="Search for articles"
                  className="outline-none w-[90%]"
                />
              </section>
            </Wrapper>

            {/* Header */}
            <DashBoardHeader title={title} svg={svg} articles={articles} />

            <ArticleReviewBox />
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default Dashboard;
