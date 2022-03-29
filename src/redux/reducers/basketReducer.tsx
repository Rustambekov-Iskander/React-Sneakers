import { BasketAction, BasketActionTypes, BasketState } from "../../types/basket"

const initialState: BasketState = {
    basket: [],
    errorB: null,
    loadingB: false,
}

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
    switch (action.type){
        case BasketActionTypes.FETCH_BASKET:
            return {loadingB: true, errorB: null, basket: []}

        case BasketActionTypes.FETCH_BASKET_SUCCES:
            return {loadingB: false, errorB: null, basket: action.payload}
        
        case BasketActionTypes.FETCH_BASKET_ERROR:
            return {loadingB: false, errorB: action.payload, basket: []}
        
        default: 
            return state
    }
}