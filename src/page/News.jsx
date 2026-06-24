import React from "react";
import Wrapper from "../Components/Wrapper";
import { useEffect } from "react";
import { useNewsContext } from "../context/NesContext";
import Loader from "../Components/Loader";

const News = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (loading) return <Loader className={"m-auto py-20 pb-40"} />;

  return (
    <Wrapper>
      <div className={`newsCards grid gap-5 ${className}`}>
        {news.map((newsDetails, index) => {
          if (!newsDetails.urlToImage) return null;
          return <NewsCard key={index} Ditails={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ Ditails }) => {
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure>
        <img
          className="w-full aspect-video object-contain"
          src={Ditails?.urlToImage}
          alt="Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{Ditails?.title}</h2>
        <p className="line-clamp-3">{Ditails.description} </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-primary mt-4"
            onClick={() => {
              window.open(Ditails.url);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
