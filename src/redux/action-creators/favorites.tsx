import { Dispatch } from "react"
import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";

export const fetchFavorites = (favorites: any) => {
    return async(dispatch: Dispatch<FavoriteAction>) => {
        try{
            dispatch({type: FavoriteActionTypes.FETCH_FAVORITES_SUCCES, payload: favorites })
        }catch(e){
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_ERROR,
                payload: 'Произошла какая-та ошибка'
            })
        }
    }
}