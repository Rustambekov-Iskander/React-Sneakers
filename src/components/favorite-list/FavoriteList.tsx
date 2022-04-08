import React, { FC } from 'react';
import PostCard from '../PostCard/PostCard';
import cl from '../post-list/PostList.module.scss';
import { Favorite } from '../../types/favorite';
import { Post } from '../../types/post';
import { Basket } from '../../types/basket';
import addAndDeletePost from '../utils/addAndDeletePost';

interface ListProps{
    posts: Favorite[];
    favorites: Favorite[];
    setFavorites:  React.Dispatch<React.SetStateAction<Favorite[]>>;
    basket: Basket[];
    setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
}

const FavoriteList: FC<ListProps> = ({
    posts,
    favorites,
    setFavorites,
    basket,
    setBasket
}) => {

    // add or delete favorites/inBasket posts
    const removeFavorite = addAndDeletePost(favorites, setFavorites);
    const addInBasket = addAndDeletePost(basket, setBasket);

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

