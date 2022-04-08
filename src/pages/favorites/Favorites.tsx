import React, { useEffect, useState } from "react";
import FavoriteList from "../../components/favorite-list/FavoriteList";
import ButtonBack from "../../components/UI/button/ButtonBack";
import Loading from "../../components/UI/loading/Loading";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import sadSmiley from "../../components/img/sad-smiley.png";
import cl from "./Favorites.module.scss";
import Button from "../../components/UI/button/Button";
import { NavLink } from "react-router-dom";

const Favorites = (props: any) => {
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
  const { basket } = useTypeSelector((state) => state.basket);
  const [basketP, setBasket] = useState(basket);
  const { fetchBasket } = useActions();

  useEffect(() => {
    fetchBasket(basketP);
  }, [basketP]);

  if (loadingF) {
    return <Loading />;
  }

  if (errorF) {
    return <h1>{errorF}</h1>;
  }

  if (favorites.length) {
    return (
      <div className={cl.list}>
        <div className={cl.title}>
          <NavLink to={"/"}>
            <ButtonBack />
          </NavLink>
          <h1>Мои закладки</h1>
        </div>
        <FavoriteList
          posts={favorites}
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
        <div className={cl.title}>Закладок нет :( </div>
        <div className={cl.descr}>Вы ничего не добавляли в закладки</div>
        <NavLink to={"/"}>
          <Button> Вернуться назад</Button>
        </NavLink>
      </div>
    );
  }
};

export default Favorites;
