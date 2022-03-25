import React from 'react';
import cl from './Header.module.scss';
import logo from '../img/logo.png';
import basket from '../img/icons/basket.svg';
import heart from '../img/icons/heart.svg';
import profile from '../img/icons/profile.svg';

const Header = () => {

    return (
        <div className={cl.header}>

            <div className={cl.header__logo}>
                <img src={logo} alt='logo' className={cl.header__logoIcon}/>
                <div className={cl.header__title}>
                    <div className={cl.header__name}>REACT SNEAKERS</div>
                    <div className={cl.header__descr}>Магазин лучших кроссовок</div>
                </div>
            </div>

            <div className={cl.header__menu}>
                <div className={cl.header__basket}>
                    <img src={basket} alt='корзина' className={cl.header__basketIcon} />
                    <div className={cl.header__num}>1200 руб.</div>
                </div>

                <img src={heart} alt='избранные' className={cl.header__heart}/>
                <img src={profile} alt='Профиль' className={cl.header__profile}/>
            </div>
            
        </div>
    );
};

export default Header;