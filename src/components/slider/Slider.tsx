import React from "react";
import Button from "../UI/button/Button";
import cl from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={cl.slider}>
      <div className={cl.slider__title}>
        <span className="green-text">Stan Smith</span>,<br />
        Forever!
      </div>
      <div className={cl.slider__button}>
        <Button>Купить</Button>
      </div>
    </div>
  );
};

export default Slider;
