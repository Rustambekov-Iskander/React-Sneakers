import React, { FC } from 'react';
import PostCard from '../PostCard/PostCard';
import cl from '../post-list/PostList.module.scss';
import { Favorite } from '../../types/favorite';
import { Post } from '../../types/post';
import { Basket } from '../../types/basket';

interface ListProps{
    posts: any[];
    favorites: any[];
    setFavorites: any;
    basket: any[];
    setBasket: any;
}

const FavoriteList: FC<ListProps> = ({
    posts,
    favorites,
    setFavorites,
    basket,
    setBasket
}) => {

    const removeFavorite = (post: Post) => {
        let forFavorite = false;
        favorites.map((favorite: Favorite) => {
            if(favorite.post.id === post.id){
                setFavorites(favorites.filter(favoritE => favoritE.post !== post))
                forFavorite = true;
            }
        })

        if(!forFavorite){
            setFavorites([...favorites, {post}])
        }
        
    }

    const addInBasket = (post: Post) => {
        let forBasket = false;

        basket.map((Basket: Basket) => {
            if(Basket.post.id === post.id){
                setBasket(basket.filter(Basket => Basket.post !== post))
                forBasket = true
            }
        })

        if (!forBasket){
            setBasket([...basket, {post}]);
        }

    }

    return (
        <div className={cl.list}>
            <div className={cl.postList}>
                {
                    posts.map(( post: Favorite) => 
                        <PostCard 
                            key={post.post.id + 100} 
                            post={post.post} 
                            favorites={favorites} 
                            heartOnClick={() => removeFavorite(post.post)}
                            basket={basket}
                            plusClick={() => addInBasket(post.post)}
                            />
                    )
                }
            </div>
        </div>

    );
};

export default FavoriteList;

