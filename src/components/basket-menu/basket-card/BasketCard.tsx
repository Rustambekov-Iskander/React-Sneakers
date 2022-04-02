import React, { FC } from 'react';
import cl from './BasketCard.module.scss';
import cross from '../../img/icons/delete.svg';
import defaultImg from '../../img/default-img.png'
import { Basket } from '../../../types/basket';

interface BasketCardProps {
    post: Basket;
    onClick: any;
}

const BasketCard: FC<BasketCardProps> = ({post, onClick}) => {
    return (
        <div className={cl.card}>
            <img className={cl.cart__defaultImg} src={defaultImg} alt="" />
            <div className={cl.card__titleAndPrice}>
                <div className={cl.card__title}>Мужские кроссовки {post.post.title}</div>
                <div className={cl.card__price}>{post.post.userId * 30}$</div>
            </div>
            <img onClick={onClick} className={cl.card__cross} src={cross} alt="" />
        </div>
    );
};

export default BasketCard;