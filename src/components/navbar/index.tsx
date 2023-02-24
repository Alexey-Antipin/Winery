import { millet, box } from "../../image";
import { List } from "../list";
import "./index.scss";

export const Navbar: React.FC = () => {
  const leftNavbar = [
    { text: "Home", href: "./" },
    { text: "About", href: "./" },
    { text: "Products", href: "./" },
  ];
  const rightNavbar = [
    { text: "Recipes", href: "./" },
    { text: "FAQ", href: "./" },
    { text: "Help", href: "./" },
  ];

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <img className="navbar__box" src={box} alt="box" />
        <div className="navbar__container-list">
          <List massive={leftNavbar} cls={"text--active"} />
          <img className="logo logo-mobile" src={millet} alt="millet" />
          <List massive={rightNavbar} />
        </div>
      </div>
    </div>
  );
};
