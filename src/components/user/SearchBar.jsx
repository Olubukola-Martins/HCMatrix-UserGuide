import search from "../../assets/user/search.svg";
import GlassDesign from "./GlassDesign";
import { useEffect, useState } from "react";
import { NoData } from "../common";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchArticle } from "../../state/user/userData/thunkFunction";
import {
  clearSearch,
  searchedContentHandler,
} from "../../state/user/userData/userData";
import { FaSpinner } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchArticles, isLoading } = useSelector((store) => store.userData);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      dispatch(clearSearch());
    }
  }, [searchInput]);

  const debouncedOnChange = useDebouncedCallback(() => {
    if (searchInput !== "") {
      dispatch(searchArticle(searchInput));
    }
  }, 500);

  const articleRouteHandler = (articleData) => {
    const { title, id } = articleData;

    dispatch(searchedContentHandler(id));
    navigate(`/search/${title}`);
    setSearchInput("");
    return;
  };

  return (
    <div className="">
      <GlassDesign className="rounded-md pl-5 py-3 ">
        <div className="flex items-center w-[60%] border-green-800 border-3">
          <img src={search} alt="" className="h-4 md:h-6" />
          <input
            value={searchInput}
            onChange={(e) => {
              const { value } = e.target;
              setSearchInput(value);
              debouncedOnChange.call();
            }}
            type="text"
            placeholder="Search for articles"
            className="bg-transparent outline-none text-l md:text-lg text-body w-[100%] md:w-[85%] ml-5 "
          />
        </div>
      </GlassDesign>

      {searchInput && (
        <div
          className={`glass__two shadow-xl max-h-[50vh] transition-all duration-100 overflow-y-auto font-semibold z-[999] rounded-md relative mt-2 py-5 px-3 `}
        >
          {isLoading ? (
            <div className="h-[40vh] my-auto flex items-center justify-center">
              <FaSpinner className="animate-spin" size={35} />
            </div>
          ) : searchArticles.length === 0 ? (
            <div className="h-[40vh] my-auto flex items-center justify-center">
              <NoData
                whiteText={true}
                msg="No articles Found!"
                padding={`py-24`}
              />
            </div>
          ) : (
            searchArticles.map((each, index) => {
              return (
                <div
                  onClick={() => articleRouteHandler(each)}
                  key={index}
                  className={`py-3 cursor-pointer border-[#C0C0C0] border-y-[.2px] px-2 ${
                    index === 0 ? "border-t-0" : ""
                  } 
                   ${index === searchArticles.length - 1 ? "border-b-0" : ""}
                 `}
                >
                  {each.title}
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
