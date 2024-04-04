// import ArticleContent from "../components/ArticleContent";
// import SectionContainer from "../components/SectionContainer";
import { useSelector } from "react-redux";
import { testing } from "../data/fine";

const Dummy = () => {
  const { store } = useSelector((store) => store.article);
  console.log(store);
  return <div dangerouslySetInnerHTML={{ __html: testing.content }}></div>;
};
export default Dummy;
