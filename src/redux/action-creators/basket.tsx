import { Dispatch } from "react";
import { BasketAction, BasketActionTypes } from "../../types/basket";

export const fetchBasket = (basket: any) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.FETCH_BASKET_SUCCES,
        payload: basket,
      });
    } catch (e) {
      dispatch({
        type: BasketActionTypes.FETCH_BASKET_ERROR,
        payload: "Произошла какая-та ошибка",
      });
    }
  };
};
