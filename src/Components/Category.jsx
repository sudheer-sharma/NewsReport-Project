import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NesContext";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleClick = async () => {
    const data = await fetchNews("/everything?q=Sports");
    console.log(data);

    setNews(data.articles);
  };

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto gap-5 px-4 scrollbar-none `}
        >
          {categories.map((category) => {
            return (
              <button
                onClick={() => {
                  handleClick;
                }}
                key={category}
                className="btn btn-outline btn-success"
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
