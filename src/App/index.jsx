import { Navbar } from "../components/navbar";
import { Content } from "../components/content";
import mouse from "../image/mouse.png";
import "./index.scss";

export const App = () => {
  const beginPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <Content />
      </div>
      <div className="mouse">
        <div className="mouse__point"></div>
        <div className="mouse__point"></div>
        <img
          className="mouse__img"
          src={mouse}
          alt="mouse"
          onClick={() => beginPage()}/>
      </div>
      <footer className="footer"></footer>
    </>
  );
};
