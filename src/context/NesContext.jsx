import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import api from "../config/axios";

const NewsContest = createContext();

const NewsContestProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async (url = "/everything?q=india") => {
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const value = { news, setNews, fetchNews };

  return <NewsContest.Provider value={value}>{children}</NewsContest.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContest);
};

export { NewsContestProvider, useNewsContext };
