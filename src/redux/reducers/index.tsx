import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { favoriteReducer } from "./favoriteReducer";
import { PostReducer } from "./postReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
  post: PostReducer,
  favorite: favoriteReducer,
  basket: basketReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
