import React, { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {useActions} from '../../hooks/useActions';
import { Post } from '../../types/post';

const PostList = () => {
    const {posts, loading, error} = useTypeSelector(state => state.post);
    const {fetchPosts} = useActions();

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div>
            {posts.map((post: Post) => 
            <div key={post.id}>{post.id}. {post.title} Цена: {post.userId}0346 руб.</div>)}
        </div>
    );
};

export default PostList;