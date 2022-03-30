import React from 'react';
import cl from './basket.module.scss';

const BasketMenu = () => {
    return (
        <div className={cl.menu}>
            <div className={cl.menu__blur}>
            </div>

            <div className={cl.menu__content}>
                <h1>Корзина</h1>
            </div>
        </div>
    );
};

export default BasketMenu;