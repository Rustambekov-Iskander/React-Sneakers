import { Dispatch } from "react";
import { ProfileAction, ProfileActionTypes } from "../../types/profile";

export const fetchProfile = (profile: any) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({
        type: ProfileActionTypes.FETCH_BASKET_SUCCES,
        payload: profile,
      });
    } catch (e) {
      dispatch({
        type: ProfileActionTypes.FETCH_BASKET_ERROR,
        payload: "Произошла какая-та ошибка",
      });
    }
  };
};
