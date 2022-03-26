import React, { FC, useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import {useActions} from '../hooks/useActions';
import { Post } from '../types/post';
import SliderList from './slider/SliderList';

const Content = () => {
    const {posts, loading, error} = useTypeSelector(state => state.post);
    const {fetchPosts} = useActions();

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div>
            {/* {posts.map((post: Post) => 
            <div key={post.id}>{post.id}. {post.title} Цена: {post.userId}0346 руб.</div>)} */}

            <SliderList/>

        </div>
    );
};

export default Content;