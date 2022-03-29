import * as PostActionCreators from './post';
import * as FavoriteActionCreators from './favorites';
import * as BasketActionCreators from './basket';

export default {
    ...PostActionCreators,
    ...FavoriteActionCreators,
    ...BasketActionCreators,
}