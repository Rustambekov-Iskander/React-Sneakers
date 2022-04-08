import React, { FC } from "react";
import PostCard from "../PostCard/PostCard";
import cl from "../post-list/PostList.module.scss";
import { Favorite } from "../../types/favorite";
import addAndDeletePost from "../utils/addAndDeletePost";
import { FavoriteListProps } from "../../types/ListProps";

const FavoriteList: FC<FavoriteListProps> = ({
  posts,
  favorites,
  setFavorites,
  basket,
  setBasket,
}) => {
  // add or delete favorites/inBasket posts
  const removeFavorite = addAndDeletePost(favorites, setFavorites);
  const addInBasket = addAndDeletePost(basket, setBasket);

  return (
    <div className={cl.list}>
      <div className={cl.postList}>
        {posts.map((post: Favorite) => (
          <PostCard
            key={post.post.id + 100}
            post={post.post}
            favorites={favorites}
            heartOnClick={() => removeFavorite(post.post)}
            basket={basket}
            plusClick={() => addInBasket(post.post)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
