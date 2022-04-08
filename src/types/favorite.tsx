import { Post } from "./post";

export interface Favorite {
  post: Post;
}

export interface FavoriteState {
  favorites: Favorite[];
  loadingF: boolean;
  errorF: null | string;
}

export enum FavoriteActionTypes {
  FETCH_FAVORITES = "FETCH_FAVORITES",
  FETCH_FAVORITES_SUCCES = "FETCH_FAVORITES_SUCCES",
  FETCH_FAVORITES_ERROR = "FETCH_FAVORITES_ERROR",
}

interface FetchFavoriteAction {
  type: FavoriteActionTypes.FETCH_FAVORITES;
}

interface FetchFavoriteSuccesAction {
  type: FavoriteActionTypes.FETCH_FAVORITES_SUCCES;
  payload: any[];
}

interface FetchFavoriteErrorAction {
  type: FavoriteActionTypes.FETCH_FAVORITES_ERROR;
  payload: string;
}

export type FavoriteAction =
  | FetchFavoriteAction
  | FetchFavoriteSuccesAction
  | FetchFavoriteErrorAction;
