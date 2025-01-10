import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const isFavorited = favorites.some((fav) => fav.uid === item.uid);
    if (isFavorited) {
      setFavorites(favorites.filter((fav) => fav.uid !== item.uid));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
