import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import ButtonBack from "../../components/UI/button/ButtonBack";
import Loading from "../../components/UI/loading/Loading";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import sadSmiley from "../../components/img/sad-smiley-2.png";
import cl from "../favorites/Favorites.module.scss";
import FavoriteList from "../../components/favorite-list/FavoriteList";

const Profile = () => {
  // get favorite posts
  const { favorites, loadingF, errorF } = useTypeSelector(
    (state) => state.favorite
  );
  const [favoritesP, setFavorites] = useState(favorites);
  const { fetchFavorites } = useActions();

  useEffect(() => {
    fetchFavorites(favoritesP);
  }, [favoritesP]);

  // get posts on basket
  const { basket, loadingB, errorB } = useTypeSelector((state) => state.basket);
  const [basketP, setBasket] = useState(basket);
  const { fetchBasket } = useActions();

  useEffect(() => {
    fetchBasket(basketP);
  }, [basketP]);

  // get ordered posts
  const { profile, loadingP, errorP } = useTypeSelector(
    (state) => state.profile
  );

  if (loadingP) {
    return <Loading />;
  }

  if (errorP) {
    return <h1>{errorP}</h1>;
  }

  if (profile.length) {
    return (
      <div className={cl.list}>
        <div className={cl.title}>
          <NavLink to={"/"}>
            <ButtonBack />
          </NavLink>
          <h1>Мои покупки</h1>
        </div>
        <FavoriteList
          posts={profile}
          favorites={favoritesP}
          setFavorites={setFavorites}
          basket={basketP}
          setBasket={setBasket}
        />
      </div>
    );
  } else {
    return (
      <div className={cl.notFound}>
        <img className={cl.smiley} src={sadSmiley} alt="грустный смайл" />
        <div className={cl.title}>Заказов нет :( </div>
        <div className={cl.descr}>
          Вы нищеброд? <br /> оформите хотя бы один заказ
        </div>
        <NavLink to={"/"}>
          <Button> Вернуться назад</Button>
        </NavLink>
      </div>
    );
  }
};

export default Profile;
