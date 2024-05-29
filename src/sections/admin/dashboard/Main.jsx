import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, MainContent } from "../../../components/admin/layout";
import {
  Container,
  Wrapper,
  ArticleReviewBox,
  DashBoardHeader,
} from "../../../components/admin";
import { Search } from "../../../assets/admin/icons/dashboard";
import { SideMenu } from "../../../components/admin";
import { Input } from "antd";
import { getCategoryArticles } from "../../../state/admin/articles/thunkFunctions";
import { filterSubArticles } from "../../../state/admin/articles/articleSlice";
import { useDebouncedCallback } from "use-debounce";
import { useMediaQuery } from "../../../hooks/common";

const Main = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState();
  const { mainCategoryId } = useSelector((store) => store.adminData);

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    dispatch(getCategoryArticles(mainCategoryId));
  }, [mainCategoryId]);

  const debouncedOnChange = useDebouncedCallback(() => {
    dispatch(filterSubArticles(searchInput));
  }, 500);

  return (
    <main className="font-semibold relative text-customGray-dark text-[15px]">
      <Container>
        <Layout>
          {/* Side Panel */}
          <SideMenu page="dashboard" title="Upload Articles" />

          {/* Main Body */}
          <MainContent>
            <div className="bg-transparent h-8 "></div>
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
            {/* Heading */}
            <DashBoardHeader />
            <ArticleReviewBox type="dashboard" />
          </MainContent>
        </Layout>
      </Container>
    </main>
  );
};
export default Main;
