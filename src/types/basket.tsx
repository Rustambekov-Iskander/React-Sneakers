import { Post } from "./post";

export interface Basket{
    post: Post;
}

export interface BasketState{
    basket: Basket[];
    loadingB: boolean;
    errorB: null | string;
}

export enum BasketActionTypes {
    FETCH_BASKET = 'FETCH_BASKET',
    FETCH_BASKET_SUCCES = 'FETCH_BASKET_SUCCES',
    FETCH_BASKET_ERROR = 'FETCH_BASKET_ERROR',
}

interface FetchBasketAction {
    type: BasketActionTypes.FETCH_BASKET;
}

interface FetchBasketSuccesAction {
    type: BasketActionTypes.FETCH_BASKET_SUCCES;
    payload: any[];
}

interface FetchBasketErrorAction {
    type: BasketActionTypes.FETCH_BASKET_ERROR;
    payload: string;
}


export type BasketAction = 
    FetchBasketAction
    | FetchBasketSuccesAction 
    | FetchBasketErrorAction;