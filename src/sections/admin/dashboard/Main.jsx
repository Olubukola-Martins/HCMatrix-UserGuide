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
import { SideMenu } from "../../../components/admin";
import { newArticleModalToggle } from "../../../state/admin/modalSlice";
import { AutoComplete } from "antd";
import { getCategoryArticles } from "../../../state/admin/articles/thunkFunctions";
import { editContent } from "../../../state/admin/articles/articleSlice";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mainCategoryId, singleCategory } = useSelector(
    (store) => store.adminData
  );
  const { singleCategoryArticles } = useSelector((store) => store.article);

  useEffect(() => {
    dispatch(getCategoryArticles(mainCategoryId));
  }, [mainCategoryId]);

  const options = [
    { label: "article", value: "article" },
    { label: "articulate", value: "articulate" },
    { label: "mandy", value: "mandy" },
    { label: "john", value: "john" },
    { label: "snow", value: "snow" },
  ];

  const editArticleNavigation = () => {
    dispatch(editContent());
    navigate("/admin/create");
  };

  return (
    <main className="font-semibold relative text-customGray-dark text-[15px]">
      <Container>
        <Layout>
          {/* Side Panel */}
          <SideMenu page="dashboard" title="Upload Articles" />

          {/* Main Body */}
          <MainContent>
            <div className="bg-transparent h-8 mb-3 "></div>
            {/* Search input */}
            <Wrapper padding={"py-2"} className="mb-4 bg-white rounded-lg">
              <section className="flex pl-6 gap-3 items-center">
                <Search />
                <AutoComplete
                  variant="borderless"
                  style={{
                    width: "99%",
                    border: "none",
                  }}
                  options={options}
                  placeholder="Search for article"
                  onSearch={(value) => console.log(value)}
                  // onSelect={editArticleNavigation}
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
