import React, { FC } from "react";
import Button from "../../UI/button/Button";
import BasketCard from "../basket-card/BasketCard";
import cl from "./BasketList.module.scss";
import { Basket } from "../../../types/basket";
import OrderState from "./OrderState";
import { BasketListProps } from "../../../types/ListProps";
import addAndDeletePost from "../../utils/addAndDeletePost";

const BasketList: FC<BasketListProps> = ({
  basket,
  setActive,
  setBasket,
  setProfile,
  profile,
}) => {
  let totalPrice = 0;

  basket.map((Basket) => {
    totalPrice += Basket.post.userId * 30;
  });

  const tax = (totalPrice / 100) * 5;
  const removePost = addAndDeletePost(basket, setBasket);
  console.log(basket);
  console.log(profile);

  const finishOrder = () => {
    setProfile(basket);
    setBasket([]);
  };

  return (
    <>
      {basket.length ? (
        <div className={cl.content}>
          <div className={cl.content__list}>
            {basket.map((Basket) => (
              <BasketCard
                key={Basket.post.id}
                post={Basket}
                onClick={() => removePost(Basket.post)}
              />
            ))}
          </div>

          <div className={cl.content__order}>
            <div className={cl.content__totalPrice}>
              Налог 5%
              <div className={cl.totalPrice__border}></div>
              <div className={cl.totalPrice__price}>{tax}$</div>
            </div>

            <div className={cl.content__totalPrice}>
              Итого <div className={cl.totalPrice__border} />
              <div className={cl.totalPrice__price}>{totalPrice + tax}$</div>
            </div>

            <Button onClick={finishOrder}>Оформить заказ</Button>
          </div>
        </div>
      ) : (
        <OrderState setActive={setActive} profile={profile} />
      )}
    </>
  );
};

export default BasketList;
