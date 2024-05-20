import search from "../../assets/user/search.svg";
import GlassDesign from "./GlassDesign";
import { useEffect, useState } from "react";
import { NoData } from "../common";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {}, [searchInput]);

  const handleFilter = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const articles = [];
  useEffect(() => {
    if (!searchInput) {
      setFilteredArticles(articles);
      return;
    }

    const filtered = articles.filter((article) =>
      article.articleTitle.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchInput]);

  const articleRouteHandler = (articleData) => {
    const { category, subcategory, leastSubcategory, articleTitle } =
      articleData;

    if (leastSubcategory) {
      navigate(
        `/category/${category}/${subcategory}/nested/${leastSubcategory}/${articleTitle}`
      );
    }

    if (!leastSubcategory) {
      navigate(`/category/${category}/${subcategory}/${articleTitle}`);
    }

    if (!subcategory) {
      navigate(`/articles/${category}/${articleTitle}`);
    }

    setSearchInput("");
    return;
  };

  return (
    <div className="">
      <GlassDesign className="rounded-md pl-5 py-3 md:mt-[-.7rem]">
        <div className="flex items-center">
          <img src={search} alt="" className="h-4 md:h-6" />
          <input
            onChange={handleFilter}
            value={searchInput}
            type="text"
            placeholder="Search for articles"
            className="bg-transparent outline-none text-l md:text-lg text-body w-[100%] md:w-[85%]  ml-5 "
          />
        </div>
      </GlassDesign>

      {searchInput && (
        <div
          className={`glass__two shadow-xl max-h-[80vh] transition-all duration-100 overflow-y-auto font-semibold z-[99999999] rounded-md relative mt-2 py-5 px-3 `}
        >
          {filteredArticles < 1 ? (
            <NoData msg="No articles Found!" padding={`py-24`} />
          ) : (
            filteredArticles.map((each, index) => {
              return (
                <div
                  onClick={() => articleRouteHandler(each)}
                  key={index}
                  className={`py-3 cursor-pointer border-[#C0C0C0] border-y-[.2px] px-2 ${
                    index === 0 ? "border-t-0" : ""
                  } 
        ${index === filteredArticles.length - 1 ? "border-b-0" : ""}
        `}
                >
                  {each.articleTitle}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
