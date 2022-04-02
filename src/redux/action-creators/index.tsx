import * as PostActionCreators from './post';
import * as FavoriteActionCreators from './favorites';
import * as BasketActionCreators from './basket';
import * as ProfileActionCreators from './profile';

export default {
    ...PostActionCreators,
    ...FavoriteActionCreators,
    ...BasketActionCreators,
    ...ProfileActionCreators,
}