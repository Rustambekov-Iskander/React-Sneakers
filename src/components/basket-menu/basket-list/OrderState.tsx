import React, { FC } from "react";
import Button from "../../UI/button/Button";
import cl from "./BasketList.module.scss";
import box from "../../img/box.jpg";
import finish from "../../img/order-done.png";
import { Profile } from "../../../types/profile";

interface State {
  setActive: (prevState: boolean) => boolean | void;
  profile: Profile[];
}

const OrderState: FC<State> = ({ setActive, profile }) => {
  return (
    <>
      {profile.length ? (
        <div className={cl.noOrders}>
          <img className={cl.succes} src={finish} alt="" />
          <div className={cl.title}>Ваш заказ оформлен</div>
          <div className={cl.descr}>
            Добавьте хотя бы одну пару кроссовок, что бы сделать заказ
          </div>
          <Button onClick={() => setActive(false)}> Вернуться назад</Button>
        </div>
      ) : (
        <div className={cl.noOrders}>
          <img className={cl.box} src={box} alt="" />
          <div className={cl.title}> Корзина пустая :( </div>
          <div className={cl.descr}>
            Добавьте хотя бы одну пару кроссовок, что бы сделать заказ
          </div>
          <Button onClick={() => setActive(false)}> Вернуться назад</Button>
        </div>
      )}
    </>
  );
};

export default OrderState;
