import React, { FC, useEffect, useRef, useState } from 'react';
import PostList from '../../components/post-list/PostList';
import SliderList from '../../components/slider/SliderList';
import Input from '../../components/UI/input/Input';
import Loading from '../../components/UI/loading/Loading';
import { useActions } from '../../hooks/useActions';
import { usePosts } from '../../hooks/usePosts';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Favorites from '../favorites/Favorites';
import cl from './Home.module.scss'


const Home = () => {

    // get posts 
    const {posts, loading, error} = useTypeSelector(state => state.post);
    const {fetchPosts} = useActions();

    useEffect(() => {
        fetchPosts();
    }, [])



    // search
    const [query, setQuery] = useState('');
    const searchedPosts = usePosts(posts, query);



    // get favorite Posts
    const {favorites, loadingF, errorF } = useTypeSelector(state => state.favorite); 
    const [favoritesP, setFavorites] = useState(favorites);
    const {fetchFavorites} = useActions();

    useEffect(() => {
        fetchFavorites(favoritesP);
    }, [favoritesP])



    // get posts in basket
    const {basket, loadingB, errorB} = useTypeSelector(state => state.basket);
    const [basketP, setBasket] = useState(basket);
    const {fetchBasket} = useActions();
    console.log(basket);

    useEffect(() => {
        fetchBasket(basketP)
    }, [basketP])


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

            {
                loading
                ?<Loading/>

                :<><PostList 
                    favorites={favoritesP} 
                    setFavorites={setFavorites}
                    basket={basketP}
                    setBasket={setBasket}
                    posts={searchedPosts}
                /></>
            }

        </div>
    );
};

export default Home;