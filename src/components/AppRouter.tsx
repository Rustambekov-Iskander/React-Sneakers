import React from 'react';
import { Route, Routes } from "react-router-dom";
import Favorites from '../pages/favorites/Favorites';
import Home from '../pages/home/Home';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    );
};

export default AppRouter;