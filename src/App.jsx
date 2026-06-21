import "./App.css";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./page/News";

function App() {
  return (
    <>
      <Navbar className={"sticky top-0 z-10"} />

      <Category className="p-10 sticky top-7 z-9 bg-base-200 " />

      <News className={"pb-10"} />

      <Footer />
    </>
  );
}

export default App;
