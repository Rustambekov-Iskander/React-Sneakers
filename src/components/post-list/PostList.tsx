import React, { FC } from 'react';
import { Post } from '../../types/post';
import PostCard from '../PostCard/PostCard';
import cl from './PostList.module.scss';

interface ListProps {
    posts: any[];
}

const PostList:FC<ListProps> = ({posts}) => {
    return (
        <div className={cl.postList}>
        {posts.length
            ?posts.map((post: Post) => 
                <PostCard key={post.id} title={post.title} price={post.userId}/>)

            :<h1 className={cl.h1}>Посты не найдены...</h1>
        }

        </div>
    );
};

export default PostList;