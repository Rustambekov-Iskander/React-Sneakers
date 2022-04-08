import {
  FavoriteAction,
  FavoriteActionTypes,
  FavoriteState,
} from "../../types/favorite";

const initialState: FavoriteState = {
  favorites: [],
  errorF: null,
  loadingF: false,
};

export const favoriteReducer = (
  state = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case FavoriteActionTypes.FETCH_FAVORITES:
      return { loadingF: true, errorF: null, favorites: [] };

    case FavoriteActionTypes.FETCH_FAVORITES_SUCCES:
      return { loadingF: false, errorF: null, favorites: action.payload };

    case FavoriteActionTypes.FETCH_FAVORITES_ERROR:
      return { loadingF: false, errorF: action.payload, favorites: [] };

    default:
      return state;
  }
};
