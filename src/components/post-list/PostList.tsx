import React, { FC } from "react";
import { Post } from "../../types/post";
import PostCard from "../PostCard/PostCard";
import addAndDeletePost from "../utils/addAndDeletePost";
import cl from "./PostList.module.scss";
import { PostListProps } from "../../types/ListProps";

const PostList: FC<PostListProps> = ({
  posts,
  favorites,
  setFavorites,
  basket,
  setBasket,
}) => {
  // add or delete favorites/inBasket posts
  const addFavorites = addAndDeletePost(favorites, setFavorites);
  const addInBasket = addAndDeletePost(basket, setBasket);

  return (
    <div className={cl.postList}>
      {posts.length ? (
        posts.map((post: Post) => (
          <PostCard
            favorites={favorites}
            basket={basket}
            heartOnClick={() => addFavorites(post)}
            plusClick={() => addInBasket(post)}
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <h1 className={cl.h1}>Обувь не найдена...</h1>
      )}
    </div>
  );
};

export default PostList;
