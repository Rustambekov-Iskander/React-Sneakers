import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { favoriteReducer } from "./favoriteReducer";
import { PostReducer } from "./postReducer";

export const rootReducer = combineReducers({
    post: PostReducer,
    favorite: favoriteReducer,
    basket: basketReducer
});

export type RootState = ReturnType<typeof rootReducer>
