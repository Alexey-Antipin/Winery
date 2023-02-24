import { Navbar, Content } from "../components";
import { mouse } from "../image";
import "./index.scss";

export const App: React.FC = () => {
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
        <div className="mouse__point"/>
        <div className="mouse__point"/>
        <img
          className="mouse__img"
          src={mouse}
          alt="mouse"
          onClick={() => beginPage()}
        />
      </div>

      <footer className="footer" />
    </>
  );
};
