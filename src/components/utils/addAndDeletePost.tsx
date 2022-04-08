import React from "react";
import { Post } from "../../types/post";
import { Favorite } from "../../types/favorite";

const addAndDeletePost = (
  posts: Favorite[],
  setPosts: React.Dispatch<React.SetStateAction<Favorite[]>>
) => {
  return (post: Post) => {
    let forPost = false;
    posts.map((Post: Favorite) => {
      if (Post.post.id === post.id) {
        setPosts(posts.filter((postE) => postE.post !== post));
        forPost = true;
      }
    });

    if (!forPost) {
      setPosts([...posts, { post }]);
    }
  };
};

export default addAndDeletePost;
