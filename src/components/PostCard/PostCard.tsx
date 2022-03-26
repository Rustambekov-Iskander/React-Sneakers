import React, { FC } from 'react';
import cl from './PostCard.module.scss';
import transparentHeart from '../img/icons/transparent-heart.svg';
// import colorHeart from '../img/icons/color-heart.png';
import defaultImg from '../img/default-img.png';
import plus from '../img/icons/plus.svg';

interface CardProps{
    img?: string;
    title: string;
    price: number;
}

const PostCard: FC<CardProps> = ({
    img = defaultImg,
    title,
    price
}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__imgs}>
                <img className={cl.card__heart} src={transparentHeart} alt="" />
                <img className={cl.card__img} src={defaultImg} alt="" />
            </div>
            <div className={cl.card__title}>Мужские Кроссовки {title}</div>

            <div className={cl.card__div}>
                <div className={cl.card__price}>
                    <div className={cl.price__cost}>ЦЕНА:</div>
                    <div className={cl.price__value}>{price}909 руб.</div>
                </div>
            <img className={cl.card__plus} src={plus} alt="" />
            </div>
        </div>
    );
};

export default PostCard;