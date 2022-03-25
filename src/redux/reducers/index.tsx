import { combineReducers } from "redux";
import { PostReducer } from "./postReducer";

export const rootReducer = combineReducers({
    post: PostReducer
});

export type RootState = ReturnType<typeof rootReducer>
