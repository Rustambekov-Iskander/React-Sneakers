import React, { FC } from "react";
import cl from "./PostCard.module.scss";
import transparentHeart from "../img/icons/transparent-heart.svg";
import colorHeart from "../img/icons/color-heart.svg";
import defaultImg from "../img/default-img.png";
import plus from "../img/icons/plus.svg";
import check from "../img/icons/check.svg";
import { Post } from "../../types/post";
import { Favorite } from "../../types/favorite";
import { Basket } from "../../types/basket";

interface Card {
  post: Post;
  img?: string;
  heart?: boolean;
  heartOnClick?: () => void;
  favorites?: Favorite[];
  plusClick?: () => void;
  basket?: Basket[];
}

const PostCard: FC<Card> = ({
  img,
  post,
  heartOnClick,
  favorites,
  heart = false,
  basket,
  plusClick,
}) => {
  if (favorites) {
    favorites.map((favorite: Favorite) => {
      if (favorite.post.id === post.id) {
        heart = true;
      }
    });
  }

  let cheked = false;
  if (basket) {
    basket.map((Basket: Basket) => {
      if (Basket.post.id === post.id) {
        cheked = true;
      }
    });
  }

  return (
    <div className={cheked ? [cl.card, cl.inBasket].join(" ") : cl.card}>
      <div className={cl.card__imgs}>
        <img
          onClick={heartOnClick}
          className={
            heart ? [cl.card__heart, cl.heart__color].join(" ") : cl.card__heart
          }
          src={heart ? colorHeart : transparentHeart}
          alt=""
        />

        <img className={cl.card__img} src={img ? img : defaultImg} alt="" />
      </div>
      <div className={cl.card__title}>Мужские Кроссовки {post.title}</div>

      <div className={cl.card__div}>
        <div className={cl.card__price}>
          <div className={cl.price__cost}>ЦЕНА:</div>
          <div className={cl.price__value}>{post.userId * 30} $</div>
        </div>
        <img
          onClick={plusClick}
          className={
            cheked ? [cl.card__plus, cl.plus__color].join(" ") : cl.card__plus
          }
          src={cheked ? check : plus}
          alt=""
        />
      </div>
    </div>
  );
};

export default PostCard;
