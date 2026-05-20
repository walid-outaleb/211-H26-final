import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  function addFavorite(movie) {
    setFavorites((currentFavorites) => {
      const movieAlreadyExists = currentFavorites.some(
        (favorite) => favorite.imdbID === movie.imdbID,
      )

      if (movieAlreadyExists) {
        return currentFavorites
      }

      return [...currentFavorites, movie]
    })
  }

  function removeFavorite(imdbID) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.imdbID !== imdbID),
    )
  }

  function isFavorite(imdbID) {
    return favorites.some((favorite) => favorite.imdbID === imdbID)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
