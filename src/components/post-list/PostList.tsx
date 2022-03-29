import React, { FC } from 'react';
import { Basket } from '../../types/basket';
import { Favorite } from '../../types/favorite';
import { Post } from '../../types/post';
import PostCard from '../PostCard/PostCard';
import cl from './PostList.module.scss';

interface ListProps {
    posts: any[];
    favorites: any[];
    setFavorites: any;
    basket: any[];
    setBasket: any;
}

const PostList:FC<ListProps> = ({
    posts, 
    favorites, 
    setFavorites,
    basket,
    setBasket
}) => {

    const addFavorites = (post: Post) => {
        setFavorites([...favorites, {post}]);

        favorites.map((favorite: Favorite) => {
            if(favorite.post.id === post.id){
                setFavorites(favorites.filter(favoritE => favoritE.post !== post))
            }
        })
    }

    const addInBasket = (post: Post) => {
        setBasket([...basket, {post}]);

        basket.map((Basket: Basket) => {
            if(Basket.post.id === post.id){
                setBasket(basket.filter(Basket => Basket.post !== post))
            }
        })
    }

    return (
        <div className={cl.postList}>
        {posts.length
            ?posts.map((post: Post) => 
                <PostCard 
                    favorites={favorites} 
                    basket={basket}
                    heartOnClick={() => addFavorites(post)} 
                    plusClick={() => addInBasket(post)}
                    key={post.id} 
                    post={post}
                />
                )

            :<h1 className={cl.h1}>Обувь не найдена...</h1>
        }

        </div>
    );
};

export default PostList;