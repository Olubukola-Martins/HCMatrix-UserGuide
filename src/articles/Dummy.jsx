// import ArticleContent from "../components/ArticleContent";
// import SectionContainer from "../components/SectionContainer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { testing } from "../data/fine";
import { FloatingInput } from "../components/admin";

const Dummy = () => {
  const [text, setText] = useState({ id: "", text: "" });
  const [final, setFinal] = useState([
    { id: 1, text: "this is the way of the world" },
    { id: 2, text: "another world" },
  ]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  };

  const onSubmitHandler = () => {
    setFinal((prev) => {
      const id = new Date().toTimeString();
      const newItem = { id, text: text.text };
      return [...prev, newItem];
    });

    setText({ id: "", text: "" });
  };

  const editHandler = (id) => {
    const word = final.find((each) => {
      return each.id === id;
    });

    setText({ id: word.id, text: word.text });
  };

  return (
    // <div className="py-5 px-10 mx-auto">
    //   <input
    //     type="text"
    //     value={text.text}
    //     name="text"
    //     onChange={onChangeHandler}
    //   />

    //   <button onClick={onSubmitHandler} className="ml-3 border">
    //     Submit
    //   </button>

    //   <div className="flex gap-3 mt-3 border">
    //     {final.map((each) => {
    //       return (
    //         <h1 onClick={() => editHandler(each?.id)} key={each.id}>
    //           {each?.text}
    //         </h1>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="py-10 items-center justify-center flex">
      <FloatingInput />
    </div>
  );
};
export default Dummy;
