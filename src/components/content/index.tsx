import { vector, millet, line } from "../../image";
import "./index.scss";

export const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content__inner">
        <div className="content__text">
          Food
          <img className="logo content-logo" src={millet} alt="millet"></img>
        </div>
        <div className="content__text">FARMING</div>
        <img className="content__img-line" src={line} alt="vector" />

        <div className="content__text">
          Food Farming is proud of our past and excited about our future. We
          strive to continue being one of India and New Zealand's great food
          companies, offering quality fruits and vegetable.
        </div>

        <div className="content__block">
          <div className="content__button">Read More</div>
          <img className="content__img" src={vector} alt="vector" />
        </div>

        <div className="grape"/>
      </div>
    </div>
  );
};
