import React, { useEffect, useState } from 'react';
import PostList from '../../components/post-list/PostList';
import SliderList from '../../components/slider/SliderList';
import Input from '../../components/UI/input/Input';
import Loading from '../../components/UI/loading/Loading';
import { useActions } from '../../hooks/useActions';
import { usePosts } from '../../hooks/usePosts';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cl from './Home.module.scss'

const Home = () => {
    const {posts, loading, error} = useTypeSelector(state => state.post);
    const {fetchPosts} = useActions();
    const [query, setQuery] = useState('');
    const searchedPosts = usePosts(posts, query);

    useEffect(() => {
        fetchPosts();
    }, [])


    if (loading){
        return (
            <Loading/>
        )
    }
    if (error){
        return (
            <h1>
                {error}
            </h1>
        )
    }

    return (
        <div>
            <SliderList/>

            <div className={cl.titleSearch}>
                <div className={cl.titleSearch__title}>Все кроссовки</div>
                <div className={cl.titleSearch__search}> 
                <Input 
                onChange={(e:any) => setQuery(e.target.value)} 
                value={query}
                /> 
                </div>
            </div>


            <PostList posts={searchedPosts}/>

        </div>
    );
};

export default Home;