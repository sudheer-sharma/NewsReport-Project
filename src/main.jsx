import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsContestProvider } from "./context/NesContext.jsx";

createRoot(document.getElementById("root")).render(
  <NewsContestProvider>
    <App />
  </NewsContestProvider>,
);
