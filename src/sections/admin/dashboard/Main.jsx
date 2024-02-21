import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddBtn } from "../../../assets/admin/icons/dashboard";
import { Layout, MainContent } from "../../../components/admin/layout";
import {
  Container,
  Wrapper,
  ArticleReviewBox,
  DashBoardHeader,
} from "../../../components/admin";
import { Search } from "../../../assets/admin/icons/dashboard";
import { getAllCategories } from "../../../state/admin/adminCategorySlice";
import { SideMenu } from "../../../components/admin";

const Main = () => {
  const dispatch = useDispatch();
  const { singleCategory } = useSelector((store) => store.adminCategory);
  const { svg, title, articles } = singleCategory;

  useEffect(() => {
    dispatch(getAllCategories({ page: "dashboard" }));
  }, []);

  return (
    <main className="font-semibold text-customGray-dark text-[15px]">
      <Container>
        <Layout>
          {/* Side Panel */}
          <SideMenu page="dashboard" title="Upload Articles" />

          {/* Main Body */}
          <MainContent>
            {/* Search input */}
            <Wrapper className="mb-4 bg-white py-2 rounded-lg">
              <section className="flex pl-6 gap-3">
                <Search />
                <input
                  type="text"
                  placeholder="Search for articles"
                  className="outline-none w-[90%]"
                />
              </section>
            </Wrapper>

            {/* Heading */}
            <DashBoardHeader title={title} svg={svg} articles={articles} />

            {articles?.length ? (
              <ArticleReviewBox />
            ) : (
              <Wrapper className="flex bg-white w-[40%] justify-center rounded-lg items-center gap-2 mb-4 cursor-pointer">
                <AddBtn />
                <span>Create New Article</span>
              </Wrapper>
            )}
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default Main;
