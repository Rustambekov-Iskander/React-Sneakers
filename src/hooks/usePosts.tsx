import { useMemo } from "react";
import { Post } from "../types/post";

export const usePosts = (posts: Post[], query: string) => {

    const sortedAndSearchedPosts = useMemo( () => {
        return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, posts])
    
    return sortedAndSearchedPosts;
}