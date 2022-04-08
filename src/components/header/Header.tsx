import React, { FC } from "react";
import cl from "./Header.module.scss";
import logo from "../img/logo.png";
import basketIcon from "../img/icons/basket.svg";
import heart from "../img/icons/heart.svg";
import profile from "../img/icons/profile.svg";
import { Link, NavLink } from "react-router-dom";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { Basket } from "../../types/basket";
import BasketMenu from "../basket-menu/BasketMenu";

interface HeaderProps {
  basketClick: () => void;
}

const Header: FC<HeaderProps> = ({ basketClick }) => {
  const { basket, loadingB, errorB } = useTypeSelector((state) => state.basket);
  let totalSum = 0;

  basket.forEach((Basket: Basket) => {
    totalSum += Basket.post.userId * 30;
  });

  return (
    <div className={cl.header}>
      <Link to={"/"}>
        <div className={cl.header__logo}>
          <img src={logo} alt="logo" className={cl.header__logoIcon} />
          <div className={cl.header__title}>
            <div className={cl.header__name}>REACT SNEAKERS</div>
            <div className={cl.header__descr}>Магазин лучших кроссовок</div>
          </div>
        </div>
      </Link>
      <div className={cl.header__menu}>
        <div onClick={() => basketClick()} className={cl.header__basket}>
          <img
            src={basketIcon}
            alt="корзина"
            className={cl.header__basketIcon}
          />
          <div className={cl.header__num}>{totalSum}$</div>
        </div>
        <Link to={"/favorites"}>
          <img src={heart} alt="избранные" className={cl.header__heart} />
        </Link>
        <Link to={"/profile"}>
          <img src={profile} alt="Профиль" className={cl.header__profile} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
