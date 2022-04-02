import { Post } from "./post";

export interface Profile{
    post: Post;
}


export interface ProfileState{
    profile: Profile[];
    loadingP: boolean;
    errorP: null | string;
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_BASKET_SUCCES = 'FETCH_PROFILE_SUCCES',
    FETCH_BASKET_ERROR = 'FETCH_PROFILE_ERROR',
}

interface FetchProfileAction {
    type: ProfileActionTypes.FETCH_PROFILE;
}

interface FetchProfileSuccesAction {
    type: ProfileActionTypes.FETCH_BASKET_SUCCES;
    payload: any[];
}

interface FetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_BASKET_ERROR;
    payload: string;
}


export type ProfileAction = 
    FetchProfileAction
    | FetchProfileSuccesAction 
    | FetchProfileErrorAction;