import React from "react";
import millet from "../../image/millet.png";
import box from "../../image/box.png";
import "./index.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <img className="navbar__box" src={box} alt="box" />
        <div className="navbar__container-list">
          <ul className="navbar__list">
            <li className="navbar__text navbar__text--active">Home</li>
            <li className="navbar__text">About</li>
            <li className="navbar__text">Products</li>
          </ul>
          <img className="logo logo-mobile" src={millet} alt="millet"></img>
          <ul className="navbar__list">
            <li className="navbar__text">Recipes</li>
            <li className="navbar__text">FAQ</li>
            <li className="navbar__text">Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
