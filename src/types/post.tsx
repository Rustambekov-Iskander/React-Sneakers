export interface Post{
    userId: number;
    id: number;
    title: string;
    body?: string;
    img?: string;
}

export interface PostP{
    post: Post;
}

export interface PostState{
    posts: any[];
    loading: boolean;
    error: null | string;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccesAction {
    type: PostActionTypes.FETCH_POSTS_SUCCES;
    payload: any[];
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export type PostAction = 
    FetchPostsAction 
    | FetchPostsSuccesAction 
    | FetchPostsErrorAction;