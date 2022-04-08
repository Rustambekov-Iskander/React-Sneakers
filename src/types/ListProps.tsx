import { Post } from "./post";
import { Favorite } from "./favorite";
import React from "react";
import { Basket } from "./basket";
import { Profile } from "./profile";

export interface PostListProps {
  posts: Post[];
  favorites: Favorite[];
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[]>>;
  basket: Basket[];
  setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
}

export interface FavoriteListProps {
  posts: Favorite[];
  favorites: Favorite[];
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[]>>;
  basket: Basket[];
  setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
}

export interface BasketListProps {
  basket: Basket[];
  profile: Profile[];
  setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
  setActive: (prevState: boolean) => boolean | void;
  setProfile: React.Dispatch<React.SetStateAction<any[]>>;
}
