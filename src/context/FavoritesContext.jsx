/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()
const FAVORITES_STORAGE_KEY = 'cinesearch-favorites'

function getSavedFavorites() {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

  if (savedFavorites) {
    return JSON.parse(savedFavorites)
  }

  return []
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(getSavedFavorites)

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

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
