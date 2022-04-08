import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
  posts: [],
  error: null,
  loading: false,
};

export const PostReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { loading: true, error: null, posts: [] };

    case PostActionTypes.FETCH_POSTS_SUCCES:
      return { loading: false, error: null, posts: action.payload };

    case PostActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [] };

    default:
      return state;
  }
};
