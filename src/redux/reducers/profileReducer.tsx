import {
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profile";

const initialState: ProfileState = {
  profile: [],
  errorP: null,
  loadingP: false,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE:
      return { loadingP: true, errorP: null, profile: [] };

    case ProfileActionTypes.FETCH_BASKET_SUCCES:
      return { loadingP: false, errorP: null, profile: action.payload };

    case ProfileActionTypes.FETCH_BASKET_ERROR:
      return { loadingP: false, errorP: action.payload, profile: [] };

    default:
      return state;
  }
};
