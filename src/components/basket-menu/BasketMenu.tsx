import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cl from './basket.module.scss';
import BasketList from './basket-list/BasketList';
import Loading from '../UI/loading/Loading';

interface BasketProps{
    active: boolean;
    setActive: (prevState: boolean) => boolean | void;
}

const BasketMenu: FC<BasketProps> = ({active, setActive}) => {

        // get posts on basket 
        const {basket, loadingB} = useTypeSelector(state => state.basket);
        const [basketP, setBasket] = useState(basket);
        const {fetchBasket} = useActions();

        useEffect(() => {
            fetchBasket(basketP)
        }, [basketP])

        const {profile} = useTypeSelector(state => state.profile);
        const [profileP, setProfile] = useState(profile);
        const {fetchProfile} = useActions();

    
        useEffect(() => {
            fetchProfile(profileP)
        }, [profileP])


    if(active){
        return (
            <div className={cl.menu}>
                <div onClick={() => setActive(false)} className={cl.menu__blur}>
                </div>
    
                <div className={cl.menu__content}>
                    <div className={cl.menu__title}>Корзина</div>

                    {
                        loadingB
                        ?<Loading/>
                        :<BasketList 
                        basket={basket} 
                        setBasket={setBasket} 
                        setActive={setActive}
                        profile={profile}
                        setProfile={setProfile}
                        />
                    }
                    

                </div>
            </div>
        );
    }else{
        return (
            <>
            </>
        )
    }


};

export default BasketMenu;